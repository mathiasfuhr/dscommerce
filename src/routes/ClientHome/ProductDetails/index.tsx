import "./styles.css";
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import { ProductDTO } from "../../../models/product";

const product: ProductDTO = {
  id: 1,
  name: "Computador Gamer XT",
  description:
    "Esta configuração apresenta um processador de 16 núcleos Intel Core i7-13700KF da arquitetura Raptor Lake, para níveis incríveis de desempenho, tanto para gaming como para trabalho e lazer. Conta também com uma placa gráfica dedicada AMD  Radeon RX 7900 XT 20GB da arquitetura AMD RDNA3, 32GB de memória DDR4 e armazenamento rápido SSD. Lentidão será coisa do passado!",
  price: 2500.99,
  imgUrl:
    "https://cdn-hardstore.s3-sa-east-1.amazonaws.com/23429/1280x960/1.webp",
  categories: [
    { id: 2, name: "Eletrônicos" },
    { id: 2, name: "computadores" },
    { id: 2, name: "importados" },
  ],
};

function ProductDetails() {
  return (
    <main>
      <section id="product-details-section" className="dsc-container">
        <ProductDetailsCard product={product} />
        <div className="dsc-btn-page-container">
          <ButtonPrimary text="Comprar" />
          <ButtonInverse text="Início" />
        </div>
      </section>
    </main>
  );
}

export default ProductDetails;
