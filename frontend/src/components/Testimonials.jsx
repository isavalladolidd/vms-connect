import { testimonials } from '../data/content'

export default function Testimonials() {
  return (
    <section id="testimonios" className="section">
      <div className="container">
        <h2 className="section__title">Testimonios</h2>
        <div className="grid grid--2">
          {testimonials.map((t) => (
            <figure key={t.author} className="quote">
              <blockquote>“{t.quote}”</blockquote>
              <figcaption>
                <span className="avatar">{t.author[0]}</span>
                {t.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
