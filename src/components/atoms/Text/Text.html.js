import './text.less';

const getColor = (color) => (color ? ` style="color: ${color}"` : '');

export const TextHtml = ({ content, color }) =>
  `<p${getColor(color)}>${content}</p>`;
