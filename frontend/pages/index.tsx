import OverlaySuggestion from '@/components/Overlay/OverlaySuggestion';
import ProductList from '@/components/ProductList';
import SimpleSidebar from '@/components/Sidebar';
import SubmitButton from '@/components/SubmitButton';
import { getAllProducts, Product } from '@/lib/airtable';
import { useDisclosure } from '@chakra-ui/react';

export async function getStaticProps() {
  const products = await getAllProducts();
  return {
    props: {
      products,
    },
    revalidate: 60,
  };
}

interface HomeProps {
  products: Product[];
}

export default function Home({ products }: HomeProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <SimpleSidebar>
        <SubmitButton onClick={onOpen} />
        <ProductList products={products} />
        <OverlaySuggestion isOpen={isOpen} onClose={onClose} />
      </SimpleSidebar>
    </>
  );
}