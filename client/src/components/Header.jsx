import React from "react";
import { Link, useAsyncError } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function () {
  const {currentUser} = useSelector((state) => state.user);

  return (
    <div className="bg-gradient-to-r from-[#409649] to-[#f3f8f3] via-white">
      <div className=" flex justify-between items-center max-w-6xl mx-auto p-5">
        <Link to="/">
          <h1 className="font-serif text-white text-3xl rounded-lg  ">Social</h1>
        </Link>
        <ul className="flex gap-4">

<Link to="/">
           <div className=" mt-2 text-xl font-medium opacity-50 cursor-pointer hover:text-blue-700">
           Schedule
            </div>

            </Link>

            <Link to="/allshareschedul">
            <div  className=" mt-2  text-xl font-medium opacity-50 cursor-pointer hover:text-blue-700">
              Workout
              
              </div> 
              </Link>    
                



          
          <Link to={""}>
          <div className='flex gap-3 ml-4  '>
        <img src="https://www.shutterstock.com/image-photo/profile-picture-smiling-successful-young-260nw-2040223583.jpg"  alt=""  className='w-10 h-10 object-cover mt-2 rounded-full'/>
       
            <div>
                <h1 className='text-gray-700 font-medium mt-2'>Jems123</h1>
            <h1 className='text-slate-600 font-medium text-sm'>Jems@gmail.com</h1> 
            </div>


        </div>
               </Link>
         

           
            
        
        </ul>
      </div>
    </div>
  );
}