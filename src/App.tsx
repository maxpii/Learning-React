import ListGroup from "./components/ListGroup";

function App() {
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

  const handleItem = (item: string) => {
    console.log(item);
  }
  return <div> 
      <ListGroup items={items} heading={"Cities"} onSelectItem={handleItem}/>
     </div>;
}
export default App;