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
    items = [];
  return (
    <>
    <h1>List</h1>
    {items.length == 0  && <p>No item found</p>/* More concise way to write this
    If the condition is true, it returns paragraph, else nothing
    Common technique*/ }
      <ul className="list-group">
        {items.map((item) => ( 
            <li key={item.id} className="list-group-item">{item.name} has a population
                of {item.id} 
            </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
