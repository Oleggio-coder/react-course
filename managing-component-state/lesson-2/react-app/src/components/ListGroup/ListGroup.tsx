//import { Fragment } from "react";
//import { MouseEvent } from "react";
import { useState } from "react";
import "./ListGroup.scss";
import styled from "styled-components";
//import styles from "./ListGroup.module.scss";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? "blue" : "none")};
`;

// {items: [], heading: string}
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void; // onClick
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(0);
  //EXAMPLE const [name, setName] = useState('');
  //arr[0]; // variable (selectedIndex)
  //arr[1]; // updater function

  //Event handler
  //const handleClick = (event: MouseEvent) => console.log(event);

  //className={[styles.ListGroup, styles.container].join(" ")}

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <List>
        {items.map((item, index) => (
          <ListItem
            /*className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }*/
            active={index === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem> //key = {item.id}
        ))}
      </List>
    </>
  );
}

export default ListGroup;
