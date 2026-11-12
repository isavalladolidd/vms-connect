import { clients } from '../data/content'

export default function Clients() {
  return (
    <section id="clientes" className="section section--alt">
      <div className="container">
        <h2 className="section__title">Clientes</h2>
        <div className="clients">
          {clients.map((c) => (
            <div key={c} className="clients__item">{c}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
