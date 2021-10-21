import React from 'react'
import {Link } from 'react-router-dom'
import Search from './Search'
const Navbar = () => {
    return (
        <>
          <div className=" p-8 pb-2 flex flex-wrap justify-between border-2 border-gray-400">
              <div className="flex flex-wrap space-x-20">
                  <div>
                      <Link to='/'>
                      <p className="text-3xl text-gray-700 font-bold rounded-lg">Goggle</p>
                      </Link>
                  </div>
                  <div>
                      <input className="h-8 w-64 rounded-2xl p-2  outline-none text-gray-600" type="text" placeholder="Search" />
                        <button className="bg-gray-800 text-white p-1 text-sm rounded-full"> search </button>
                  </div>
              </div>
              <div className="space-x-3"> 
                  {/* <a href="">Gmail</a>
                  <a href="">Apps</a> */}
                  <i>profile</i>
              </div>
          </div>  
          <Search/>
        </>
    )
}

export default Navbar
