import { useEffect, useState } from 'react'
import { slides } from '../data/content'

export default function Hero() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % slides.length), 5000)
    return () => clearInterval(id)
  }, [])
  const s = slides[i]
  return (
    <section id="inicio" className="hero">
      <div className="container hero__inner">
        <p className="eyebrow">Redes de telecomunicaciones, computadoras y servidores</p>
        <h1 key={i} className="hero__title">{s.title}</h1>
        <p key={`t${i}`} className="hero__text">{s.text}</p>
        <div className="hero__cta">
          <a href="#contacto" className="btn btn--primary">Solicita una cotización</a>
          <a href="#servicios" className="btn btn--ghost">Ver servicios</a>
        </div>
        <div className="dots" role="tablist">
          {slides.map((sl, n) => (
            <button
              key={sl.title}
              aria-label={sl.title}
              className={n === i ? 'dot dot--active' : 'dot'}
              onClick={() => setI(n)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
