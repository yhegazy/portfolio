import {useState} from 'react'
import { Stage, Layer, Shape, Line } from 'react-konva';

// Base, Arch, Triangular, Half_Arch, Rectangular
const shapeTopNames = ['Arch', 'Triangular', 'Half Arch', 'Rectangular']

const Konva = () => {
    const [shapeTop, setShapeTop] = useState("")
    const height = 600
    const width = 1200

    const LineTop = () => {
        return <>
            <Line 
                x={0}
                y={0}
                points={[500, 180, 320, 180]}
                stroke="black"
            />
        </>
    }

    const Triangletop = () => {
        return <>
            <Line 
                x={0}
                y={0}
                points={[320, 180, 410, 130, 500, 180]}
                stroke="black"
            />
        </>
    }

    const ArcTop = () => {
        return <>
             <Line
                x={0}
                y={0}
                points={[320, 180, 410, 130, 500, 180]}
                tension={1}
                stroke="black"
            />        
        </>
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
                        {shapeTop === 'Triangular' ? <Triangletop /> : shapeTop === 'Rectangular' ? <LineTop /> : shapeTop === 'Arch' ? <ArcTop /> : shapeTop === 'Half Arch' ? <HalfArcTop /> : null }                        
                    </Layer>
                </Stage>
                
            </div>
            
            <div className="w-1/5 px-5 py-2 ml-auto mr-auto rounded bg-gradient-to-b from-gray-100 to-gray-300">
                <p className="text-center underline"> Control Menu</p>
                <div className="flex justify-center py-3 space-x-3">
                    <label htmlFor="shape" className="font-medium">Shape Top:</label>
                    <select id="shape" name="type" value={shapeTop} onChange={e => setShapeTop(e.target.value)}>
                        <option>Select One</option>
                        {shapeTopNames.map((name) => <option>{name}</option> )}
                    </select>
                </div>

                <div className="flex justify-center px-10 my-10 text-white">
                    <button className="DEFAULT_E">Calculate</button>
                </div>
            </div>
        </main>
    </>
}

export default Konva
