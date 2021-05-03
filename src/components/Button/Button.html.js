import "./button.css";

export const getClassName = ({ primary, size }) => {
  const classes = ["button"];
  classes.push(primary ? "button--primary" : "button--secondary");
  if (size) classes.push(`button--${size}`);
  return classes.join(" ");
};

export const ButtonStory = ({ label, backgroundColor, primary, size }) => {
  return `<button type="button" className="${getClassName({
    primary,
    size,
  })}" style=${backgroundColor && { backgroundColor }} > ${label} </button>`;
};
