import { useState, useEffect } from 'react';

interface MouseCoordinates {
    x: number;
    y: number;
}

export function useGlobalMousePosition() {
    const [coords, setCoords] = useState<MouseCoordinates>({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setCoords({
                x: event.screenX,
                y: event.screenY,
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return coords;
}
