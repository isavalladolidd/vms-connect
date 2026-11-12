import { brand, nav } from '../data/content'

export default function Footer() {
  return (
    <footer id="contacto" className="footer">
      <div className="container">
        <div className="cta">
          <h2>¿Listo para mejorar tu red?</h2>
          <p>Cuéntanos tu proyecto y te respondemos pronto.</p>
          <a className="btn btn--primary" href={`mailto:${brand.email}`}>Escríbenos</a>
        </div>
        <div className="footer__cols">
          <div>
            <strong>{brand.name}</strong>
            <p>{brand.tagline}</p>
          </div>
          <div>
            <h4>Páginas</h4>
            {nav.map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}
          </div>
          <div>
            <h4>Contáctanos</h4>
            <a href={`mailto:${brand.email}`}>{brand.email}</a>
            <a href={`tel:${brand.phone}`}>{brand.phoneLabel}</a>
          </div>
        </div>
        <p className="footer__copy">© {new Date().getFullYear()} {brand.name}. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
