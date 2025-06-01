import './projectCard.css';

const ProjectCard = ({ imageUrl, title, description, projectUrl }) => {
    return (
        <a href={projectUrl} className="project-card-link">
            <div className="project-card">
                <div className="project-image-container">
                    {imageUrl ? (
                        <img src={imageUrl} alt={title} className="project-image" />
                    ) : (
                    <div className="project-image-placeholder">IMG</div>
                    )}
                </div>
                <div className="project-info">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </a>
    );
};

export default ProjectCard;