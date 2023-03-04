import ProductList from '@/components/ProductList';
import SimpleSidebar from '@/components/Sidebar';
import { getAllProducts, Product } from '@/lib/airtable';


export async function getStaticProps() {
  const products = await getAllProducts();
  // console.log(`products: ${JSON.stringify(products)}`);
  return {
    props: {
      products,
    },
    revalidate: 60,
  };
}

export type Sort = "Latest" | "Earliest";

interface HomeProps {
  products: Product[];
}

export default function Home({ products }: HomeProps) {

  return (
    <>
      <SimpleSidebar>
        <ProductList products={products} />
      </SimpleSidebar>
    </>
  );
}