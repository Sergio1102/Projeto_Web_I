import './section.css';

const Section = ({title, children, id, className, backgroundColor}) => {
    const sectionStyle = backgroundColor ? {backgroundColor: backgroundColor} : {};
    return (
    <section id={id} className={`section-wrapper ${className || ''}`} style={sectionStyle}>
        <div className="section-content">
            {title && <h2 className="section-title">{title}</h2>}
            {children}
        </div>
    </section>
  );
};

export default Section;