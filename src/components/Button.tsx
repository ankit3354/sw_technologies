interface ButtonProps {
  text: string;
  secondary?: boolean;
}

const Button = ({ text, secondary }: ButtonProps) => {
  return <button className={secondary ? "secondary-btn" : ""}>{text}</button>;
};

export default Button;
