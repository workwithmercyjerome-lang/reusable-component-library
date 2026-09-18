import "./Button.css";

function Button({ children, variant = "primary", size = "medium", type = "button", disabled = false, onClick }) {
  const variantClass =
    variant === "outline" ? "btn-outline" : variant === "danger" ? "btn-danger" : "btn-primary";

  const sizeClass = size === "small" ? "btn-small" : size === "large" ? "btn-lg" : "";

  return (
    <button
      type={type}
      className={`btn ${variantClass}${sizeClass ? ` ${sizeClass}` : ""}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;