import "../globalStyles/roboto.css"
import { useGlobalMousePosition } from "../hooks/useMouseTracker";
import { useRef, useState } from "react";

function Roboto() {
    const { x, y } = useGlobalMousePosition();
    const [facePosition, setFacePosition] = useState({ x: 0, y: 0 });
    const elementRef = useRef(null);
    const handleGetPosition = () => {
        if (elementRef.current) {
            // 2. Get position relative to the browser viewport
            const rect = elementRef.current.getBoundingClientRect();

            // 3. Add scroll offsets to get the absolute position on the page
            const absoluteX = rect.left + window.scrollX;
            const absoluteY = rect.top + window.scrollY;

            setFacePosition({ x: absoluteX, y: absoluteY });

        }
    };


    return (
        <>

            <div className="RobotBody">
                <div className="center-circle"></div>
                <div ref={elementRef} onClick={handleGetPosition} className="Face">
                    <Eye className="left-eye" x={facePosition.x} y={facePosition.y} />
                    <Eye className="right-eye" x={facePosition.x} y={facePosition.y} />

                </div>

            </div>
        </>
    );
}

export default Roboto


const Eye = ({ className, x, y }) => {

    return (
        <div className={`eye-base ${className}`}>O</div>
    );
}
