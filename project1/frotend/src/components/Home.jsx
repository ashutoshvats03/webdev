import { useEffect, useState } from 'react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid';



function Home() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm()

  const getpasswords=async()=>{
    let req = await fetch("http://localhost:3000/")
    let password=await req.json()
    console.log(password)
    setpasswordArray(password)
  }
    
   


  const [passwordArray, setpasswordArray] = useState([])
  useEffect(() => {
    getpasswords();
    // const storedPasswords = JSON.parse(localStorage.getItem('passwords'));
    // if (Array.isArray(storedPasswords)) {
    //   setpasswordArray(storedPasswords);
    // } else {
    //   setpasswordArray([]);
    // }
  }, [])


  const onsubmit = async (data) => {
    setpasswordArray([...passwordArray, { id: uuidv4(), ...data }])

    reset()
    // localStorage.setItem('passwords', JSON.stringify([...passwordArray,{id:uuidv4(), data}]))
    let res =await fetch("http://localhost:3000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id: uuidv4(), ...data }),
    })
    console.log(Array.isArray(passwordArray));
  }


  const handleDelete = async (id) => {
    const newarray = passwordArray.filter(el => el.id !== id);
    setpasswordArray(newarray)
    // localStorage.setItem('passwords', JSON.stringify(newarray))
    let res =await fetch("http://localhost:3000/", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id}),//data
    })
  }


  const handleEdit = async (id) => {
    const edit = passwordArray.find(el => el.id === id);
    if (edit) {
      setValue('link', edit.link);
      setValue('username', edit.username);
      setValue('password', edit.password);
    }
    handleDelete(id)
    let res =await fetch("http://localhost:3000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id: uuidv4(), ...data }),
    })
    
  }



  return (
    <div className='bg-blue-400 min-h-[96vh] pt-11'>
      <div className='w-1/2 bg-blue-300 min-h-80 m-auto px-5 pt-3 pb-5'>
        <form onSubmit={handleSubmit(onsubmit)} action="">
          <input className='border rounded-md w-full m-auto px-2 py-1 my-3 ' type="text" {...register('link')} placeholder='Enter Link' />
          <div className='flex gap-5'>
            <input className='border rounded-md w-1/2 m-auto px-2 py-1 ' type="text" {...register('username', { required: true })} placeholder='Enter id' />
            <input className='border rounded-md w-1/2 m-auto px-2 py-1 ' type="password" {...register('password', { required: true })} placeholder='Enter password' />
          </div>
          <input type="submit" className='bg-blue-900 text-white rounded-md w-1/2 m-auto px-2 py-1 my-3 ' />
        </form>
        <div className='text-2xl font-bold '>Your PassWords</div>
        <table className='w-full overflow-hidden rounded-md'>
          <thead className=''>
            <tr>
              <th className='bg-blue-500'>Link</th>
              <th className='bg-blue-700'>username</th>
              <th className='bg-blue-700'>Password</th>
              <th ></th>
            </tr>
          </thead>
          <tbody>
            
            {
              Array.isArray(passwordArray) ?
              passwordArray.map((item) => {
                return (
                 item.link && item.username && item.password &&
                
                    <tr key={item.id} className='text-black'>
                    <td className='w-2/3 bg-blue-100' ><a href="/item.link" target="_blank" className='block  text-center w-full'> {item.link} </a></td>
                    <td className='bg-blue-200 text-center'>{item.username}</td>
                    <td className='bg-blue-200 text-center'>{item.password}</td>
                    <td className='flex gap-3 ml-2'>
                      <div onClick={() => handleDelete(item.id)} >
                        <lord-icon
                          src="https://cdn.lordicon.com/drxwpfop.json"
                          trigger="hover"
                          stroke="bold"
                          fill="black"
                          style={{ width: "25px", height: "25px" }}
                        ></lord-icon>
                      </div>
                      <div onClick={() => handleEdit(item.id)} >
                        <lord-icon
                          src="https://cdn.lordicon.com/wuvorxbv.json"
                          trigger="hover"
                          stroke="bold"
                          fill="black"
                          style={{ width: "25px", height: "25px" }}
                        ></lord-icon>
                      </div>
                    </td>
                  </tr>
               

                );
              }):
              <div>not array</div>
              }
          </tbody>
        </table>
      </div>
      <button onClick={() => localStorage.clear()}>
      Clear Local Storage
    </button>
    </div>
  )
}

export default Home
