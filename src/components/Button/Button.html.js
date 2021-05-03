import "./button.css";

const getClassName = ({ primary, size }) => {
  const classes = ["button"];
  classes.push(primary ? "button--primary" : "button--secondary");
  if (size) classes.push(`button--${size}`);
  return classes.join(" ");
};

const getBackgroundColor = (backgroundColor) =>
  backgroundColor ? ` style="background-color: ${backgroundColor}"` : "";

export const ButtonStory = ({ label, backgroundColor, primary, size }) => {
  return `<button type="button" className="${getClassName({
    primary,
    size,
  })}"${getBackgroundColor(backgroundColor)}>${label}</button>`;
};
