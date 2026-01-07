export default function SectionWrapper({ children, variant = 'default', className = '' }) {
  return (
    <section className={`section-wrapper section-${variant} ${className}`}>
      {children}
    </section>
  );
}
