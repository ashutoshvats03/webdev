import { useState, useEffect } from 'react';
const Fetch = () => {
  const [datas, setdatas] = useState([]);
  useEffect(  () => { //useEffect wants a cleaup function as a result not a promise so thats why a new async fun is described in it
    const fetchData = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        console.log(data);
        setdatas(data);
      };
  
      fetchData();
  }, []);
  return (
    <div className='flex flex-wrap'>
      
      {datas.map((data) => (
       <div key={data.id} className="card w-1/6 h-1/8 bg-slate-700 m-2 p-2 overflow-auto">
            <h1 className='underline text-xl'>{data.title}</h1>
            <div >{data.body}</div>
       </div>
      ))}
    </div>
  );
};
export default Fetch;