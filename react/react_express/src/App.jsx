import { useState } from 'react'
import { useForm } from "react-hook-form"

import './App.css'



function App() {
  
    const {
      register,
      handleSubmit,
      watch,
      setError,
      formState: { errors,isSubmitting },
    } = useForm()

// const delay =(d)=>{
//   return new Promise((res,rej)=>{
//     setTimeout(() => {
//       res()
//     }, d*1000);
//   })
// }
  const onSubmit = async (data) => {
    // await delay(4)
    let r = await fetch("http://localhost:3000/", {
      method: "POST",
       headers: {
    "Content-Type": "application/json",
  },
      body: JSON.stringify(data),
    });
    
    let res = await r.text()
    console.log(data,res)
    // if(data.username=="harry"){
    //   setError("myform",{message:"INVALID CREDENTIALS"})
    // }
    // else if(data.username==="rohan"){
    //   setError("blocked",{message:"Blocked"})
    // }
  }

  return (
    
      <div>
        {isSubmitting && <div>Loading....</div>}
        <div className="conatiner">
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <input placeholder='write credentials' {...register("username",{minLength:{value:3,message:"less than min length"},maxLength:{value:10,message:"greater than max length"}, required: true })} type="text" />
            {errors.username && <div>{errors.username.message} there is error</div>}
            <input placeholder='write credentials' {...register("password")} type="password"  />
            <input disabled={isSubmitting} type="submit" value="submit" />
            {errors.myform && <div className='red'>{errors.myform.message}</div>}
            {errors.blocked && <div className='red'>{errors.blocked.message}</div>}
          </form>
        </div>
      </div>
      
    
  )
}

export default App
