import './Error.css'
import Button from '../Button/Button'
import Card from '../Card/Card';
import React
 from 'react';
import ReactDOM from 'react';

function Backdrop(props){
  return(
 <div className="backdrop" onClick={props.OnClick}></div>
  )
}

function ModalOverlay(props){
  return(

    <Card className="modal">
      <header className="header">
        <h2>{props.title}</h2>
      </header>
      <div className="content">
        <p>{props.message}</p>
      </div>
      <footer className="actions">
        <Button onClick={props.OnClick}>Okay</Button>
      </footer>
    </Card>
  )
}




function Error(props){

return (
  <React.Fragment>
    {ReactDOM.createPortal(
      <Backdrop onClick={props.OnClick} />,
      document.getElementById("backdrop-root")
    )}
    {ReactDOM.createPortal(
      <ModalOverlay
        title={props.title}
        message={props.message}
        onClick={props.OnClick}
      />,
      document.getElementById("modal-root")
    )}
  </React.Fragment>
);
}

export default Error