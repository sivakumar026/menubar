import React from 'react'
import Authendicate from './Authendicate'
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate()
  return (
    <div> 
      <div className='flex justify-between  text-2xl bg-slate-900 '>
        <div className='m-4 text-white'>
          <h1>Logo</h1>
        </div>
        <ul className=' h-10vh m-4  flex text-white gap-5'>
          <li className="group relative w-30 h-15">
            <a href="" className='hover:text-fuchsia-600  border-slate-900 transition-all delay-300 hover:border-fuchsia-600 cursor-pointer'>Add/sub</a>
            <div className="group-hover:block hidden absolute bg-white shadow-lg py-2 px-4 right-0 mt-2 rounded transition-opacity group-hover:opacity-100 opacity-0 duration-300  ">
              <a onClick={()=>navigate("/auth")}  className="block text-gray-800 hover:text-fuchsia-600 cursor-pointer">Generator</a>
              <a onClick={()=>navigate("/auth")} className="block text-gray-800 hover:text-fuchsia-600">Flash</a>
              <a  onClick={()=>navigate("/auth")} href="#" className="block text-gray-800 hover:text-fuchsia-600">Set</a>
            </div>
          </li>
          <li className='group relative'>
            <a href="" className='hover:text-fuchsia-600 transition border-b-2 border-slate-900  hover:border-fuchsia-600 cursor-pointer'>Multiplication</a>
            <div className="group-hover:block hidden absolute bg-white shadow-lg py-2 px-4 right-0 mt-2 rounded ">
              <a href="#" onClick={()=>navigate("/auth")} className="block text-gray-800 hover:text-fuchsia-600">Generator</a>
              <a href="#" onClick={()=>navigate("/auth")} className="block text-gray-800 hover:text-fuchsia-600">Flash</a>
              <a href="#" onClick={()=>navigate("/auth")} className="block text-gray-800 hover:text-fuchsia-600">Set</a>
            </div>
          </li>
          <li className='group relative'>
            <a href=""  className='hover:text-fuchsia-600 transition border-b-2 border-slate-900  hover:border-fuchsia-600 cursor-pointer'>Division</a>
            <div className="group-hover:block hidden absolute bg-white shadow-lg py-2 px-4 right-0 mt-2 rounded ">
              <a href="#" onClick={()=>navigate("/auth")} className="block text-gray-800 hover:text-fuchsia-600">Generator</a>
              <a href="#" onClick={()=>navigate("/auth")} className="block text-gray-800 hover:text-fuchsia-600">Flash</a>
              <a href="#" onClick={()=>navigate("/auth")} className="block text-gray-800 hover:text-fuchsia-600">Set</a>
            </div>
          </li>
          <li>
            <a href="" className='hover:text-fuchsia-600 transition border-b-2 border-slate-900  hover:border-fuchsia-600 cursor-pointer'>About</a>
          </li>
        </ul>
      </div>
      <div className=' h-screen '>
        <div className="container">
        <div className="blobs">
          <div className="blob big-blob"></div>
          <div class="blob"></div>
          <div class="blob"></div>
          <div class="blob"></div>
          <div class="blob"></div>
          <div class="blob"></div>
          <div class="blob"></div>
        </div>
        </div>
      </div>
    </div>
    
  )
}
<script src="./index.js"></script>

export default Home
