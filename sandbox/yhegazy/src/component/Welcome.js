import React from 'react'


const Welcome = (props) => {
  
  return (
      <div className="ml-auto mr-auto w-2/3 py-48">
    <div className="grid justify-items-center text-7xl text-gray-100 space-y-10">
      <h1 className="strokeme">
        <span className="text-9xl text-yellow-300">H</span>ello and 
        <span className="text-9xl text-yellow-300">W</span>elcome
      </h1>
      <p className="strokeme">
        <span className="text-7xl">M</span>
        <span className="text-6xl">y name is
          <span className="text-yellow-300 font-semibold"> Yahia Hegazy
          </span>
        </span>
      </p>
    </div>
  </div>
  )
}

export default Welcome
