
import Card from '../Card/Card';
import './UserData.css'

function UserData(props) {
 
  return (
    <Card className="users">
      <ul>
        {props.userDataShown.map((user) => (
          <li>
            <span> {user.name}</span>
            <span> {user.college}</span>
            <span>({user.age} years old)</span>
          
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UserData
