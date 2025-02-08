import { useState, useEffect } from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [title, settitle] = useState("")
  const [titles, settitles] = useState([])
  const [content, setcontent] = useState("")
  const [contents, setcontents] = useState([])
  const [news, setnews] = useState([])
  const [ImpN, setImpN] = useState(false)
  const [isChecked, setisChecked] = useState(false)


  useEffect(() => {
    let newsString = localStorage.getItem("newss")
    if (newsString) {
      let news = JSON.parse(localStorage.getItem("newss"))
      setnews(news)
    }
  }, [])


  const saveToLS = (params) => {
    localStorage.setItem("newss", JSON.stringify(news))
  }


  const handleAddNews = (e) => {

    title.length > 50 || content > length > 150 ? alert("not big title") :
      setnews([...news, { id: uuidv4(), content, title, ImpN }])
    console.log(news)
    // console.log(title)
    // console.log(titles)
    // console.log(content)
    // console.log(contents)

    setcontent("")
    settitle("")
    setImpN(false)
    setisChecked(false)
    saveToLS()
  }


  // const handleContent = () => {
  //   setcontents([...contents,{content}])
  //   setcontent("")
  // }
  const handleTitle = (e) => {
    settitle(e.target.value)

  }

  const handleContent = (e) => {
    setcontent(e.target.value)

  }
  const handleDelete = (e, id) => {
    let newnews = news.filter(item => {
      return item.id != id;
    });
    setnews(newnews)
    saveToLS()
  }
  const handleImp = (e) => {
    saveToLS()
    setImpN(true)
    setisChecked(true)
  }





  return (
    <div className=' w-full h-full bg-black text-white no-scrollbar'>
      <div className="flex  ">
        <div className="write w-[550px]">
          <div className=' relative h-[250px]'>
            <input onChange={handleTitle} value={title} className='bg-zinc-700  w-[500px] h-[100px] m-5 rounded-lg p-5' type='text' placeholder='TITLE ' />
            <input onChange={handleContent} value={content} className="bg-zinc-700  w-[500px] h-[100px] ml-5 mb-5 rounded-lg p-5" type='text' placeholder='CONTENT OF THE PAPER ' />
            <button onClick={handleAddNews} disabled={title.length <= 3} className='bg-slate-900 max-w-20 absolute bottom-5 right-10 px-4 py-1 z-10 disabled:hidden hover:px-7 '>Add</button>
          </div>
          <span className=' font-semibold ml-6'>IS THIS SOMETHING URGENT</span>
          <input onChange={handleImp} checked={isChecked} className='bg-slate-300 ml-4' type="checkbox" name="" id="" />

        </div>
        <div className='max-h-[40vh]  min-w-[900px]  mx-5  text-centre p-5 overflow-y-auto no-scrollbar'>
          <div className='text-xl font-bold'>IMPORTANT HEADLINES OF THE DAY</div>
          {(news).map(item => {
            return item.ImpN == true && <div key={item.id}>
              <div className="imptitle my-2 font-bold">{item.title} </div>
              <div className="impcontent "> {item.content}</div>
            </div>
          })}
        </div>
      </div>

      <div className="border mt-5"></div>

      <div className=" relative newspaper  min-h-screen ">
        {news.length == 0 ? <div className=' text-3xl font-bold m-10'>Nothing to show</div> :
          <div className="container relative top-5 flex flex-wrap">
            <div className="absolute  left-[45%] text-center text-2xl font-bold hover:text-3xl cursor-pointer">Daily news</div>
            <div className="news relative top-10 ">
              {(news).map(item => {
                return <div key={item.id} className="container flex">
                  <MdDeleteOutline name={item.id} onClick={(e) => handleDelete(e, item.id)} className='w-[35px] h-[35px] ml-5 mt-5' />
                  <h1 className="title  font-bold text-xl flex flex-wrap justify-center  m-5">{item.title} -</h1>
                  <div className="content  mt-5  pt-1" >{item.content}</div>
                </div>
              })}
            </div>
          </div>


        }
      </div>
    </div>
  )
}

export default App
