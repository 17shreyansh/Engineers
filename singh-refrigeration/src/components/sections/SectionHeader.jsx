export default function SectionHeader({ title, subtitle, description, align = 'left' }) {
  return (
    <div className={`section-header align-${align}`}>
      {subtitle && <div className="section-subtitle">{subtitle}</div>}
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
