// pascal casing
function Message() {
    // JSX: JavaScript XML: going to get compiled to Javascript
    const myName = "Someone";
    if (myName === "Someone")
        return <h1>A random</h1>;
    else
        return <h1>Hello {myName}</h1>;
}
export default Message;