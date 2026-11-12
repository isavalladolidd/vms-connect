import { services } from '../data/content'

export default function Services() {
  return (
    <section id="servicios" className="section">
      <div className="container">
        <h2 className="section__title">Servicios</h2>
        <p className="section__lead">Todo lo que tu empresa necesita para estar conectada.</p>
        <div className="grid grid--3">
          {services.map((s) => (
            <article key={s.title} className="card">
              <div className="card__icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
