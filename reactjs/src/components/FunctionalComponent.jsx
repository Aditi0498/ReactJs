import React, {useState} from "react";
// function FunctionalComponent (props)
function FunctionalComponent ({name, age, college, setName}){
    const [count, setCount] = useState(0)
    const [changeName, setChangeName] = useState("");

    // const {name, age, college, setName} = props;
    return(
        <div>
            <h1>This is our functional component</h1>
            <button onClick = {() => setCount(count+1)}>Click on me to increment by 1</button> 
            <button onClick = {() => setCount(count-1)}>Click on me to decrement by 1</button> 
            <h1>{count}</h1>
                {/* <h5>My name is {props.name}, My age is {props.age}, My  college name is {props.college}</h5>
                <input  type = "text" onChange = {(e)=> setChangeName(e.target.value)}/>
                <button onClick = {() => props.setName(changeName)}>Change name </button>  */}

<h5>My name is {name}, My age is {age}, My  college name is {college}</h5>
                <input  type = "text" onChange = {(e)=> setChangeName(e.target.value)}/>
                <button onClick = {() =>setName(changeName)}>Change name </button> 

        </div>
    )
}

export default FunctionalComponent;   