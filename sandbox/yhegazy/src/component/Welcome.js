import React from 'react'


const Welcome = () => {
  
  return (
      <main className="w-2/3 py-48 ml-auto mr-auto">
        <div className="grid space-y-10 text-gray-100 justify-items-center text-7xl">
          <h1 className="strokeme">
            <span className="text-yellow-300 text-9xl">H</span>ello and 
            <span className="text-yellow-300 text-9xl">W</span>elcome
          </h1>
          <p className="strokeme">
            <span className="text-7xl">M</span>
            <span className="text-6xl">y name is
              <span className="font-semibold text-yellow-300"> Yahia Hegazy
              </span>
            </span>
          </p>
        </div>
      </main>
  )
}

export default Welcome
