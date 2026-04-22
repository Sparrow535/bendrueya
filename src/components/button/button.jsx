import { Link } from "react-router-dom";
import "./button.css";

function Button({
  label,
  theme = "dark",
  className = "",
  type = "button",
  to,
  ...props
}) {
  const classes = `button button--${theme} ${className}`.trim();

  if (to) {
    return (
      <Link className={classes} to={to} {...props}>
        <span className="button__label">{label}</span>
      </Link>
    );
  }

  return (
    <button
      className={classes}
      type={type}
      {...props}
    >
      <span className="button__label">{label}</span>
    </button>
  );
}

export default Button;
