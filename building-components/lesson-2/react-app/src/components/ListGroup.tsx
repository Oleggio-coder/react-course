//import { Fragment } from "react";
//import { MouseEvent } from "react";
import { useState } from "react";

// {items: [], heading: string}
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void; // onClick
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //EXAMPLE const [name, setName] = useState('');
  //arr[0]; // variable (selectedIndex)
  //arr[1]; // updater function

  //Event handler
  //const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li> //key = {item.id}
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
