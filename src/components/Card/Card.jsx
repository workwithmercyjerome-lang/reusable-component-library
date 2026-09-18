import "./Card.css";

function Card({ title, description, image, children, footer }) {
  return (
    <article className="card">
      {image && <img className="card-image" src={image} alt={title} />}

      <div className="card-content">
        <h3>{title}</h3>

        {description && <p>{description}</p>}

        {children && <div className="card-body">{children}</div>}
      </div>

      {footer && <div className="card-footer">{footer}</div>}
    </article>
  );
}

export default Card;