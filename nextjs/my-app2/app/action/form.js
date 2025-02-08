"use server"
import fs from "fs/promises"
export const submitAction = async (e)=>{
    "use server"
    fs.writeFile("data.txt","name is "+e.get("name")+" address is "+e.get("add"))
    console.log("name "+e.get("name")) 
    console.log("address "+e.get("add")) 

  } 