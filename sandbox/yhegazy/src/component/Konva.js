import {useState} from 'react'
import { Stage, Layer, Shape, Line } from 'react-konva';

// Base, Arch, Triangular, Half_Arch, Rectangular
const ceilingNames = ['Arch', 'Triangular', 'Half Arch', 'Rectangular']
const colorNames = ['red', 'orange', 'indigo', 'pink', 'purple', 'blue']

// The next few days will be manipulating the canvas.

const Konva = () => {
    const [ceiling, setCeiling] = useState("")
    const [numArchPeaks, setNumArchPeaks] = useState(1)
    const [leftColor, setLeftColor] = useState("")
    const [topColor, setTopColor] = useState("")
    const [rightColor, setRightColor] = useState("")
    const [base, setBase] = useState(240)
    const [roofHt, setRoofHt] = useState(13)
    const [walls, setWalls] = useState(90)
    
    const height = 600
    const width = 1200
    const x = 320
    const y = 360
    const single = [0, walls, base / 2, -roofHt, base, walls];

    const LineTop = () => <Line x={x} y={y} points={[0, -walls, base, -walls]} stroke={topColor && topColor} strokeWidth={topColor && 10} />
    
    const Triangletop = () =>  {
        const lines = [];
        for (var i = 0; i < numArchPeaks; i++) {
            const perSpan = single.map((x) => x / numArchPeaks);
            lines.push(
                // <Line x={x + i * base  / numArchPeaks} y={numArchPeaks > 1 ? (y- walls) / numArchPeaks : 180} points={perSpan} stroke={topColor === "" ? "black": topColor} strokeWidth={numArchPeaks > 10 ? 3: 8} />

                <Line x={x + (i * base)  / numArchPeaks} y={y-(walls / numArchPeaks)-walls} points={perSpan} stroke={topColor === "" ? "black": topColor} strokeWidth={3} />
            );
        }
        return lines;        
   }
   
    const ArcTop = () => {
        const lines = [];
        for (var i = 0; i < numArchPeaks; i++) {
            const perSpan = single.map((x) => x / numArchPeaks);
            lines.push(
                <Line x={x + (i * base)  / numArchPeaks} y={y-(walls / numArchPeaks)-walls} points={perSpan} tension={1} stroke={!topColor ? "black": topColor} strokeWidth={3} />
            );
        }
        return lines;
    }

    const HalfArcTop = () => {
        return <>
             <Shape
            //  0, 0, 160, -25, 320, 0
                sceneFunc={(context, shape) => {
                    context.beginPath();
                    context.moveTo(x, y-walls); 
                    context._context.arcTo(x*2, 160, x*2, 170, 10); 
                    context.lineTo(x*2, y-walls);
                    // (!) Konva specific method, it is very important
                    context.fillStrokeShape(shape);
                }}
                x={0}
                y={0}
                stroke={!topColor ? "black": topColor} strokeWidth={numArchPeaks > 10 ? 3: 8}
            />        
        </>
    }

    return <>
        <main className="flex flex-wrap w-11/12 ml-auto">
            <div className="w-1/2 ml-auto mr-auto text-center bg-green-400">
                <h1 className="text-5xl">2D Sandbox</h1>
                <p> Приятно познакомиться</p>
                
            </div>

            {/* Stage */}
            <div className="w-3/4 p-2.5 ml-auto mr-auto bg-gray-200 rounded ">
                <Stage width={width} height={height}>
                    <Layer>
                        {/* Base Shape */}
                        {/* Note superscript i: Enlarged width stroke is used for visual purposes only. */}
                                                 {/* [320, 180, 320, 280]
                                                     [320, 280, 640, 280]}
                                                     [640, 280, 640, 180] */}
                        <Line x={x} y={y} points={[0, 0, 0, -walls]} stroke={!leftColor ? "black": leftColor} strokeWidth={3} />
                        <Line x={x} y={y} points={[0, 0, base, 0]} stroke="black" strokeWidth={2}/>
                        <Line x={x} y={y} points={[base, 0, base, -walls]} stroke={!rightColor ? "black": rightColor} strokeWidth={3}  />
                    </Layer>

                    {/* Roof Shape */}
                    <Layer>
                        {ceiling === 'Triangular' ? <Triangletop /> : ceiling === 'Rectangular' ? <LineTop /> : 
                            ceiling === 'Arch' ? <ArcTop /> : ceiling === 'Half Arch' ? <HalfArcTop /> : null }                        
                    </Layer>
                </Stage>
                
            </div>
            
            {/* Control Menu */}
            <div className="w-1/5 px-5 py-2 ml-auto mr-auto rounded bg-gradient-to-b from-gray-100 to-gray-300">
                <p className="text-center underline"> Control Menu</p>
                <div className="flex justify-between py-3 space-x-3">
                    <label htmlFor="shape" className="font-medium">Shape Top:</label>
                    <select id="shape" name="type" value={ceiling} onChange={e => setCeiling(e.target.value)}>
                        <option>Select One</option>
                        {ceilingNames.map((name) => <option>{name}</option> )}
                    </select>
                </div>

                {(ceiling === "Triangular" || ceiling === "Arch") &&
                    <div className="flex justify-between">
                        <label htmlFor="hasPeaks" className="font-medium">Number of Peaks? </label>
                        <input className=""  id="hasPeaks" value={numArchPeaks} onChange={e => setNumArchPeaks(e.target.value)} size="1"/>    
                    </div>
                }
                {(isNaN(numArchPeaks) || numArchPeaks < 0) && <p className="font-semibold text-red-700">Must be a number and greater than 0.</p>}

                {ceiling !== "Select One" && [<div className="flex justify-between py-3 space-x-3">
                    <label htmlFor="shape" className="font-medium">Ceiling Color:</label>
                    <select id="shape" name="type" value={topColor} onChange={e => setTopColor(e.target.value)}>
                        <option>Select One</option>
                        {colorNames.map((name, id) => <option key={id} >{name}</option> )}
                    </select>
                </div>, <div className="flex justify-between">
                    <label htmlFor="roofHt" className="font-medium">roof height </label>
                    <input className=""  id="roofHt" value={roofHt} onChange={e => setRoofHt(e.target.value)} size="1"/>    
                </div>]}

                {/* Side height = roof height + 1 */}

                <div className="flex justify-between py-3 space-x-3">
                    <label htmlFor="shape" className="font-medium">Left wall color</label>
                    <select id="shape" name="type" value={leftColor} onChange={e => setLeftColor(e.target.value)}>
                        <option>Select One</option>
                        {colorNames.map((name, id) => <option key={id} >{name}</option> )}
                    </select>
                </div>


                <div className="flex justify-between py-3 space-x-3">
                    <label htmlFor="shape" className="font-medium">Right Wall color</label>
                    <select id="shape" name="type" value={rightColor} onChange={e => setRightColor(e.target.value)}>
                        <option>Select One</option>
                        {colorNames.map((name, id) => <option key={id} >{name}</option> )}
                    </select>
                </div>

                <div className="flex justify-between py-3">
                    <label htmlFor="customWidth" className="font-medium">custom width </label>
                    <input className=""  id="customWidth" value={base} onChange={e => setBase(e.target.value)} size="1"/>    
                </div>
               
                <div className="flex justify-between">
                    <label htmlFor="walls" className="font-medium">side height </label>
                    <input className=""  id="walls" value={walls} onChange={e => setWalls(e.target.value)} size="1"/>    
                </div>
            </div>
        </main>
    </>
}

export default Konva
