"use client";
export default function Home() {
  const handleClick = async ()=>{
    let data ={
      name:"ashutosh",
      age:22
    }
    let a= await fetch("/api/add",{
      method:"POST",
      header:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    })
    let res = await a.json()
    console.log(res)
  }
  return(
  <div>
    <button className="bg-orange-500" onClick={handleClick}>Click me</button>
   </div>
  );
}
// export const metadata = {
//   title: "home",
//   description: "Generated by create next app",
// };