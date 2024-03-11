import "./styles.css";
import SearchBar from "../../../components/SearchBar";
import CatalogCard from "../../../components/CatalogCard";
import ButtonNextPage from "../../../components/ButtonNextPage";
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

function Catalog() {
  return (
    <main>
      <section id="catalog-section" className="dsc-container">
        <SearchBar />

        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
        </div>
        <ButtonNextPage />
      </section>
    </main>
  );
}

export default Catalog;
