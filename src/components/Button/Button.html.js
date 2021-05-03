import "./button.css";

export const getClassName = ({ primary, size }) => {
  const classes = ["storybook-button"];
  classes.push(
    primary ? "storybook-button--primary" : "storybook-button--secondary"
  );
  if (size) classes.push(`storybook-button storybook-button--${size}`);
  return classes.join(" ");
};

export const ButtonStory = ({ label, backgroundColor, primary, size }) => {
  return `<button type="button" className="${getClassName({
    primary,
    size,
  })}" style=${backgroundColor && { backgroundColor }} > ${label} </button>`;
};
