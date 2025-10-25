import React, { useState } from "react";
import axios from "axios"

const Addemployee = () => {

    const [name,setName]=useState("")
    const [age,setAge]=useState(0)
    const [email,setEmail]=useState("")

    const adddata = async(e)=>{
            e.preventDefault()
            console.log();
            console.log(name,age,email);

            const response=await axios.post("http://localhost:3000/api/adddata",{name,age,email})
            if (response){
                alert("data added succesfully")
                
            }else{
                alert("cant add data")
            }


            
            
    }


    return(
        <div>
            <form id="form">
                <input type="text" name="" id="" placeholder="name"   onChange={(e)=>(setName(e.target.value))}/>
                <input type="number"  placeholder="age" id="" onChange={(e)=>(setAge(e.target.value))}/>
                <input type="text" name="" id="" placeholder="email"   onChange={(e)=>(setEmail(e.target.value))}/>
                <button onClick={adddata}>submit</button>

            </form>
        </div>
    )
}
export default Addemployee
