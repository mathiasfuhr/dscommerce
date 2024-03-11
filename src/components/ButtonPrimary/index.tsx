import "./styles.css";

type Props = {
  text: string
}

function ButtonPrimary({text}:Props) {
  return (
    <div>
      <div className="dsc-btn dsc-btn-blue">{text}</div>
    </div>
  );
}

export default ButtonPrimary;
