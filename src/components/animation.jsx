import { useEffect, useRef } from 'react'

function Animated({ children, className, id }) {
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add('show')
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  console.log(children)
  return (
    <div ref={ref} className={className} id={id}>
      {children}
    </div>
  )
}

export default Animated
