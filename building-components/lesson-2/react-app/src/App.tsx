//import ListGroup from "./components/ListGroup";
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
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
}

export default App;
