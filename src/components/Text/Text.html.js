import "./text.less";

const getClassName = ({ size }) => {
  const classes = ["text"];
  if (size) classes.push(`text--${size}`);
  return classes.join(" ");
};

const getColor = (color) => (color ? ` style="color: ${color}"` : "");

export const TextStory = ({ content, color, size }) => {
  return `<p className="${getClassName({
    size,
  })}"${getColor(color)}>${content}</p>`;
};
