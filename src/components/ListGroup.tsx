import { MouseEvent, useState }  from "react";
interface Props {
  items: any[];
  heading: string;
  onSelectItem: (item:string) => void;
}

function ListGroup({items ,heading,onSelectItem}: Props) {
    // going to use list mapping, similar to mappping and list comprehension in python
    // hook, taps into built in react features
    const [selectedIndex,setSelectedIndex] = useState(-1); // array, first index variable second is updater function
    const [name,setName] = useState(""); 

  return (
    <>
    <h1>{heading}</h1>
    {items.length == 0  && <p>No item found</p>/* More concise way to write this
    If the condition is true, it returns paragraph, else nothing
    Common technique*/ }
      <ul className="list-group">
        {items.map((item, index) => ( 
            <li key={item.id} onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }} 
                className={selectedIndex == index ? "list-group-item active": "list-group-item"}>{item.name} has a population
                of {item.population} 
            </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
