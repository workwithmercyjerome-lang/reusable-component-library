import "./Loader.css";

function Loader({ size = "medium", text }) {
  return (
    <div className="loader-wrapper">
      <span className={`loader loader-${size}`}></span>

      {text && <span className="loader-text">{text}</span>}
    </div>
  );
}

export default Loader;