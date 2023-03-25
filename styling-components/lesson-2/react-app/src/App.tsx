//import ListGroup from "./components/ListGroup";
//import "./App.css";
//import { useState } from "react";
//import Alert from "./components/Alert";
//import Button from "./components/Button/Button";
//import { BsFillCalendarFill } from "react-icons/bs";
import Like from "./components/Like";

function App() {
  return (
    <div>
      <Like
        onClick={() => {
          console.log("Clicked!");
        }}
      />
    </div>
  );

  /*

  return (
    <div>
      <Button onClick={() => {}}>BUTTON</Button>
    </div>
  );

  */

  /*

  return (
    <div>
      <BsFillCalendarFill color="aquamarine" size="40" />
    </div>
  );

  */

  /*

  const items = ["New York", "Los Angeles", "San Francisco"];

  return (
    <div>
      <ListGroup heading="Miami" items={items} onSelectItem={() => {}} />
    </div>
  );

  */

  /*

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          THIS IS ALERT FROM RED BUTTON
        </Alert>
      )}
      <Button color="danger" onClick={() => setAlertVisibility(true)}>
        MY FIRST BUTTON
      </Button>
    </div>
  );

  */
}

export default App;
