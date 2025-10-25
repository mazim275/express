import React, { useState } from "react";
import axios from "axios"
import { useEffect } from "react";
import userschema from "../../backend/models/userschema";


const Getemployee=()=>{

    const getdata = async() => {

   

            const response=await axios.get("http://localhost:3000/api/getdata")

            if (response){
                alert("data added succesfully")
                console.log(response.data);
                
                
            }else{
                alert("cant add data")
            }

   
    }


    useEffect(()=>{
        getdata()
    },[])


    return(
        
            <div id="user-details">
         
            </div>
            
        
    )
}

export default Getemployee
