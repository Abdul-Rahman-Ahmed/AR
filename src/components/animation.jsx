import { useEffect, useRef } from 'react'

function Animated({ children, className, id }) {
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.unobserve(ref.current)
          ref.current.classList.add('show')
        }
      },
      { rootMargin: '0px 0px -300px 0px', threshold: 0 }
    )
    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={className} id={id}>
      {children}
    </div>
  )
}

export default Animated
