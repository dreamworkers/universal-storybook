import './button.less';

const getClassName = ({ primary, size }) => {
  const classes = ['button'];
  classes.push(primary ? 'button--primary' : 'button--secondary');
  if (size) classes.push(`button--${size}`);
  return classes.join(' ');
};

const getBackgroundColor = (backgroundColor) =>
  backgroundColor ? ` style="background-color: ${backgroundColor}"` : '';

export const ButtonHtml = ({ label, backgroundColor, primary, size }) =>
  `<button type="button" className="${getClassName({
    primary,
    size,
  })}"${getBackgroundColor(backgroundColor)}>${label}</button>`;
