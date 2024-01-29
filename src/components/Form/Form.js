
import './Form.css'
import { useState } from 'react';

import Error from '../modals/Error';
import Button from '../Button/Button';
import Card from '../Card/Card';

function Form(props){
  const[username,setUsername] = useState('');
  const[userage,setUserage] = useState('');
  const[error,setError] =useState(null)

  const handleUsername =(event)=>{
   let newName = event.target.value;
   setUsername(newName);

  }
  const handleUserage =(event)=>{
    let newAge = event.target.value
    setUserage(newAge)
  }
  

    const handleFormSubmit=(event)=>{
        event.preventDefault();
        if(username.trim().length === 0 && userage <=0){
        setError({title:'Invalid Inputs', message:'Please fill the input fields'})
            return
        }
        if(+userage <1){
              setError({
                title: "Invalid Age",
                message: "Please enter valid age",
              });
          return
        }
        const userData ={
            name:username,
            age:userage,
        }
    
    props.onSubmitNewData(userData);
   
      setUsername('')
      setUserage('')
    }

    const handleErrorstate = () =>{
      setError(null)
    }


    return (
      <div>
        {error && (
          <Error
            title={error.title}
            message={error.message}
            OnClick={handleErrorstate}
          />
        )}
        <Card className="input">
          <form onSubmit={handleFormSubmit}>
            <label>Username</label>
            <input type="text" onChange={handleUsername} value={username} />
            <label>Age(Years)</label>
            <input type="number" onChange={handleUserage} value={userage} />
            <Button type="submit">Add User</Button>
          </form>
        </Card>
      </div>
    );

}
export default Form