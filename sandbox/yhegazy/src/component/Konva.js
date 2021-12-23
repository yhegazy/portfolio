import {useState} from 'react'
import { Stage, Layer, Shape, Line } from 'react-konva';

// Base, Arch, Triangular, Half_Arch, Rectangular
const ceilingNames = ['Arch', 'Triangular', 'Half Arch', 'Rectangular']

const Konva = () => {
    const [ceiling, setCeiling] = useState("")
    const [numArchPeaks, setNumArchPeaks] = useState(1)
    // const [calculated, setCalculated] = useState(0)
    
    const height = 600
    const width = 1200
    const x = 320
    const y = 180
    const single = [0, 0, 90, -25, 180, 0];

    const LineTop = () => <Line x={0} y={0} points={[500, 180, 320, 180]} stroke="black" />
    
    const Triangletop = () =>  {
        const lines = [];
        for (var i = 0; i < numArchPeaks; i++) {
            const perSpan = single.map((x) => x / numArchPeaks);
            lines.push(
                <Line x={x + i * 180 / numArchPeaks} y={y} points={perSpan} stroke="black" />
            );
        }
        return lines;        
   }
   
    const ArcTop = () => {
        const lines = [];
        for (var i = 0; i < numArchPeaks; i++) {
            const perSpan = single.map((x) => x / numArchPeaks);
            lines.push(
                <Line x={x + i * 180 / numArchPeaks} y={y} points={perSpan} tension={1} stroke="black" />
            );
        }
        return lines;
    }

    const HalfArcTop = () => {
        return <>
             <Shape
                sceneFunc={(context, shape) => {
                    context.beginPath();
                    context.moveTo(320, 180); 
                    context._context.arcTo(500, 160, 500, 170, 10); 
                    context.lineTo(500, 180);
                    // (!) Konva specific method, it is very important
                    context.fillStrokeShape(shape);
                }}
                x={0}
                y={0}
                stroke="black"
            />        
        </>
    }

    // const handleCalculateButton = () => {
    //     setCalculated(numArchPeaks)
    // }

    return <>
        <main className="flex flex-wrap w-11/12 ml-auto">
            <div className="w-1/2 ml-auto mr-auto text-center bg-green-400">
                <h1 className="text-5xl">2D Sandbox</h1>
                <p> Приятно познакомиться</p>
                
            </div>

            <div className="w-3/4 ml-auto mr-auto bg-gray-200 rounded ">
                <Stage width={width} height={height}>
                    <Layer>
                        {/* Base Shape */}
                        <Shape
                            sceneFunc={(context, shape) => {
                                context.beginPath();
                                            //-x, -y
                                context.moveTo(500, 180);
                                context.lineTo(500, 230);
                                context.lineTo(320, 230)
                                context.lineTo(320, 180)
                                // (!) Konva specific method, it is very important
                                context.fillStrokeShape(shape);
                            }}
                            fill=""
                            stroke="black"
                            strokeWidth={3}                            
                        />            
                    </Layer>

                    {/* Roof Shape */}
                    <Layer>
                        {ceiling === 'Triangular' ? <Triangletop /> : ceiling === 'Rectangular' ? <LineTop /> : 
                            ceiling === 'Arch' ? <ArcTop /> : ceiling === 'Half Arch' ? <HalfArcTop /> : null }                        
                    </Layer>
                </Stage>
                
            </div>
            
            <div className="w-1/5 px-5 py-2 ml-auto mr-auto rounded bg-gradient-to-b from-gray-100 to-gray-300">
                <p className="text-center underline"> Control Menu</p>
                <div className="flex justify-between py-3 space-x-3">
                    <label htmlFor="shape" className="font-medium">Shape Top:</label>
                    <select id="shape" name="type" value={ceiling} onChange={e => setCeiling(e.target.value)}>
                        <option>Select One</option>
                        {ceilingNames.map((name) => <option>{name}</option> )}
                    </select>
                </div>

                {ceiling === "Triangular" || ceiling === "Arch" ?
                    <div className="flex justify-between">
                        <label htmlFor="hasPeaks" className="font-medium">Number of Peaks? </label>
                        <input className=""  id="hasPeaks" value={numArchPeaks} onChange={e => setNumArchPeaks(e.target.value)} size="5"></input>
                        
                    </div>
                    : <p><span className="font-medium">Number of Peaks? </span> Select an option that has this feature.</p>
                }
                {/* {(typeof numArchPeaks || numArchPeaks < 0) && <p className="font-semibold text-red-700">Must be a number greater than 0.</p>} */}
                    
                

                <div className="flex justify-center px-10 my-10 text-white">
                    {/* <button className="DEFAULT_E" onClick={handleCalculateButton}>Calculate</button> */}
                     <button className="DEFAULT_E">Calculate</button>
                </div>
            </div>
        </main>
    </>
}

export default Konva
