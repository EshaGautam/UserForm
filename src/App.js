import React , {useState} from 'react';
import UserData from './components/UserList/UserData';
import Form from './components/Form/Form';




function App() {

   const [userDataList, setUserDataList] = useState([]);

   const handleSubmitOfNewData = (userData) => {
     let dataShown = {
       ...userData,
       id: Math.random().toString(),
     };

     setUserDataList((prevData) => [dataShown, ...prevData]);
   };

  return (
    <div>
      <Form onSubmitNewData={handleSubmitOfNewData} />
      <UserData userDataShown={userDataList} />
    </div>
  );
}

export default App;
