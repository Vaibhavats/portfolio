export default function SectionTitle({ eyebrow, heading, subtext }) {
  return (
    <div className="section-title-wrapper">
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2 className="section-heading">{heading}</h2>
      {subtext && <p className="section-subtext">{subtext}</p>}
      <div className="section-divider" />
    </div>
  );
}
