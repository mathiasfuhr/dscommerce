import "./styles.css";

type Props = {
  name: string;
};

function ProductCategory({ name }: Props) {
  return (
    <div>
      <div className="dsc-category">{name}</div>
    </div>
  );
}

export default ProductCategory;
