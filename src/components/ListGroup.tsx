import { MouseEvent, useState }  from "react";
function ListGroup() {
    // going to use list mapping, similar to mappping and list comprehension in python
    let items = [
        {"name":"New York",
            "id":1,
            "population":"A lot"
        },
        {
            "name": "Pakistan",
            "id":2,
            "population":"Very very much"
        }
    ];
    // hook, taps into built in react features
    const [selectedIndex,setSelectedIndex] = useState(-1); // array, first index variable second is updater function
    const [name,setName] = useState(""); 

  return (
    <>
    <h1>List</h1>
    {items.length == 0  && <p>No item found</p>/* More concise way to write this
    If the condition is true, it returns paragraph, else nothing
    Common technique*/ }
      <ul className="list-group">
        {items.map((item, index) => ( 
            <li key={item.id} onClick={() => setSelectedIndex(index)} 
                className={selectedIndex == index ? "list-group-item active": "list-group-item"}>{item.name} has a population
                of {item.population} 
            </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
