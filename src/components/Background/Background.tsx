import { useEffect, useRef } from 'react'
import './Background.css'

const Background = () => {
  const backgroundRef = useRef<HTMLDivElement>(null)
  const minCircles = 15
  const maxCircles = 30
  let currentCircles = 0

  const createCircle = () => {
    if (!backgroundRef.current || currentCircles >= Math.random() * (maxCircles - minCircles) + minCircles) return

    const circle = document.createElement('div')
    circle.classList.add('circle')

    const maxSize = Math.random() * 3900 + 100
    const startX = Math.random() * window.innerWidth
    const startY = Math.random() * window.innerHeight
    circle.style.left = `${startX}px`
    circle.style.top = `${startY}px`

    backgroundRef.current.appendChild(circle)
    currentCircles++

    const directionX = Math.random() * 200 - 100
    const directionY = Math.random() * 200 - 100

    setTimeout(() => {
      circle.style.transform = `scale(${maxSize / 10})`
      circle.style.left = `${startX + directionX}px`
      circle.style.top = `${startY + directionY}px`
    }, 100)

    setTimeout(() => {
      circle.style.transform = 'scale(0.1)'
      circle.style.left = `${startX + directionX * 2}px`
      circle.style.top = `${startY + directionY * 2}px`

      setTimeout(() => {
        circle.style.opacity = '0'
        setTimeout(() => {
          circle.remove()
          currentCircles--
        }, 3000)
      }, 3000)
    }, 6000)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      requestAnimationFrame(createCircle)
    }, 800)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className="background" ref={backgroundRef}></div>
      <div className="blur-overlay"></div>
      
    </>
  )
}

export default Background