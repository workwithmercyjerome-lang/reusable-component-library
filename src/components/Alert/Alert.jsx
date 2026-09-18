import "./Alert.css";

function Alert({ type = "info", title, children }) {
  return (
    <div className={`alert alert-${type}`} role="alert">
      <div className="alert-content">
        {title && <h3>{title}</h3>}

        <p>{children}</p>
      </div>
    </div>
  );
}

export default Alert;