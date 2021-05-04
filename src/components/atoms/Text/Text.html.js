import "./text.less";

const getColor = (color) => (color ? ` style="color: ${color}"` : "");

export const TextStory = ({ content, color }) => {
  return `<p${getColor(color)}>${content}</p>`;
};
