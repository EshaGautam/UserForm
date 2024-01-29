
import './Form.css'
import { useState , useRef} from 'react';

import Error from '../modals/Error';
import Button from '../Button/Button';
import Card from '../Card/Card';

function Form(props){


 const enteredName = useRef();
 const enteredAge = useRef();
 const enteredCollege = useRef();
const [error, setError] = useState(null);


  // const[username,setUsername] = useState('');
  // const[userage,setUserage] = useState('');
 

  // const handleUsername =(event)=>{
  //  let newName = event.target.value;
  //  setUsername(newName);

  // }
  // const handleUserage =(event)=>{
  //   let newAge = event.target.value
  //   setUserage(newAge)
  // }
  

    const handleFormSubmit=(event)=>{
        event.preventDefault();
    const  inputName = enteredName.current.value;
    const inputAge = enteredAge.current.value;
    const  inputCollege = enteredCollege.current.value;

        if(inputName.trim().length === 0 && inputAge <=0){
        setError({title:'Invalid Inputs', message:'Please fill the input fields'})
            return
        }
        if (+inputAge < 1) {
          setError({
            title: "Invalid Age",
            message: "Please enter valid age",
          });
          return;
        }
        if (inputCollege.trim().length === 0) {
          setError({
            title: "Input Invalid",
            message: "Please fill all the fields",
          });
          return;
        }

        const userData ={
            name:inputName,
            age:inputAge,
            college:inputCollege,
        }
    
    props.onSubmitNewData(userData);
      
    enteredName.current.value=""
    enteredAge.current.value=""
    enteredCollege.current.value=""
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
            onClick={handleErrorstate}
          />
        )}
        <Card className="input">
          <form onSubmit={handleFormSubmit}>
            <label>Username</label>
            <input type="text" ref={enteredName} />
            <label>Age(Years)</label>
            <input type="number" ref={enteredAge} />
            <label> College Name</label>
            <input type='text' ref={enteredCollege} />
            <Button type="submit">Add User</Button>
          </form>
        </Card>
      </div>
    );

}
export default Form