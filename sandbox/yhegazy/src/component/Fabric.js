import React, { useState, useEffect } from 'react';
import { fabric } from 'fabric';


const Fabric = () => {
  const [canvas, setCanvas] = useState('');
  useEffect(() => {
    setCanvas(initCanvas());
  }, []);
  const initCanvas = () => (
    new fabric.Canvas('canvas', {
      height: 600,
      width: 1000,
      backgroundColor: "rgba(220, 38, 38)"
    })
  )

  const addRect = canvi => {
    const rect = new fabric.Rect({
      height: 280,
      width: 200,
      fill: 'yellow'
    });
    canvi.add(rect);
    canvi.renderAll(); //This gives it the ability to move the shape around.
  }

  
  return(
    <main className="flex flex-wrap w-11/12 ml-auto">
      
      <div className="m-3">
          <h1>Fabric.js on React - fabric.Canvas('...')</h1>
        <button className="p-1 font-semibold text-white bg-red-600 rounded shadow" onClick={() => addRect(canvas)}>Add Rectangle</button>
      
      </div>
      
     <br/><br/>
      <div className="m-5">
        <canvas id="canvas" />
      </div>
    </main>
  );
}

export default Fabric