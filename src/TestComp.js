
//import './App.css'

function TestComp() {
  let name = "Sanjay"
var status = true

{/* JSX Styling react always recommends to use inline styles.*/}

var inlineStyle = {
  color:'red'
}

  return (
    <div className="App">
    <h2 style={inlineStyle}> My name is {name}</h2>
    {/* THis is how we use the commnet in JSX .
       *There is no if else condition in JSX  */}
    <p style={{color:'blue'}} id="test">Status : {status === false ? "Status is false" : "Status is true"}</p>
     
    </div>
    
    //The below will give us the error as its one more parent
   // <p></p>
  );
}


export default TestComp;
