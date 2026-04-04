export default function PageHeader({ title, subtitle }) {
  return (
    <section className="page-header">
      <div className="page-header-bg" />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h1 className="page-header-title page-header-animate">{title}</h1>
        {subtitle && <p className="page-header-subtitle page-header-animate">{subtitle}</p>}
      </div>
    </section>
  )
}
