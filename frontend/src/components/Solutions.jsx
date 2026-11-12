import { solutions } from '../data/content'

export default function Solutions() {
  return (
    <section id="soluciones" className="section section--alt">
      <div className="container">
        <h2 className="section__title">Soluciones</h2>
        <p className="section__lead">Lo que instalamos, configuramos y mantenemos.</p>
        <div className="grid grid--3">
          {solutions.map((s, n) => (
            <a key={s.title} href="#contacto" className="tile" style={{ '--n': n }}>
              <span className="tile__tag">{s.tag}</span>
              <h3>{s.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
