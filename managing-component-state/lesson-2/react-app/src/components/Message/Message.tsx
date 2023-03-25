// PascalCasing

/*

function Message() {
  //JSX: JavaScriptXML

  const name = "Oleg";

  if (name) {
    return <h1>Hello, {name}!</h1>;
  } else {
    return <h1>Hello, World!</h1>;
  }
}

export default Message;

*/

let count = 0;

const Message = () => {
  console.log("Message called", count);
  count++;
  return <div>Message {count}</div>;
};

export default Message;
