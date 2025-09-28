import { useState, useEffect, useRef } from 'react'

const CursorLight = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isClient, setIsClient] = useState(false)
    const [trail, setTrail] = useState([])
    const trailIdRef = useRef(0)

    useEffect(() => {
        setIsClient(true)
    }, [])

    useEffect(() => {
        if (!isClient) return

        const updateMousePosition = (e) => {
            const newPosition = { x: e.clientX, y: e.clientY }
            setMousePosition(newPosition)

            setTrail((prev) => {
                const newTrail = [
                    { x: newPosition.x, y: newPosition.y, id: trailIdRef.current++ },
                    ...prev.slice(0, 25),
                ]
                return newTrail
            })
        }

        window.addEventListener('mousemove', updateMousePosition)
        return () => window.removeEventListener('mousemove', updateMousePosition)
    }, [isClient])

    if (!isClient) return null

    return (
        <>
            {/* Hafif ana ışık merkezi */}
            <div
                className="fixed rounded-full pointer-events-none z-40"
                style={{
                    width: '6px',
                    height: '6px',
                    left: mousePosition.x - 3,
                    top: mousePosition.y - 3,
                    backgroundColor: 'transparent',
                    boxShadow: '0 0 40px 15px rgba(255, 159, 28, 0.15)',
                    mixBlendMode: 'screen',
                }}
            />

            {/* Ultra soft iz */}
            {trail.map((point, index) => (
                <div
                    key={point.id}
                    className="fixed pointer-events-none z-30"
                    style={{
                        left: point.x - 10,
                        top: point.y - 10,
                    }}
                >
                    <div
                        className="rounded-full"
                        style={{
                            width: '20px',
                            height: '20px',
                            backgroundColor: 'transparent',
                            opacity: 1,
                            filter: `blur(${12 + index * 0.4}px)`,
                            boxShadow: `0 0 ${24 + index * 0.5}px rgba(255, 159, 28, ${0.1 - index * 0.003})`,
                            mixBlendMode: 'screen',
                        }}
                    />
                </div>
            ))}
        </>
    )
}

export default CursorLight
