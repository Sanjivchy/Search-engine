import React from 'react'

const Navbar = () => {
    return (
        <>
          <div className=" p-8 pb-2 flex flex-wrap justify-between border-2 border-gray-400">
              <div className="flex flex-wrap space-x-20">
                  <div>
                      <p className="text-3xl text-gray-700 font-bold rounded-lg">Goggle</p>
                  </div>
                  <div>
                      <input className="h-8 w-64 rounded-2xl p-2  outline-none text-gray-600" type="text" placeholder="Search" />
                  </div>
              </div>
              <div> 
                  <a href="">asdas</a>
                  <a href="">asdas</a>
                  <i>profile</i>
              </div>
          </div>  
        </>
    )
}

export default Navbar
