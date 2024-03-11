import "./styles.css";

type Props = {
  text: string;
};

function ButtonInverse({ text }: Props) {
  return (
    <div>
      <div className="dsc-btn dsc-btn-white">{text}</div>
    </div>
  );
}

export default ButtonInverse;
