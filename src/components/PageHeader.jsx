import ScrollReveal from '../components/ScrollReveal'

export default function PageHeader({ title, subtitle }) {
  return (
    <section className="page-header">
      <div className="page-header-bg" />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <ScrollReveal>
          <h1 className="page-header-title">{title}</h1>
          {subtitle && <p className="page-header-subtitle">{subtitle}</p>}
        </ScrollReveal>
      </div>
    </section>
  )
}
