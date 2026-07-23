import { Suspense } from 'react';
import Products from '../../components/Product/product';

export default function ProductsPage() {
  return (
    <Suspense fallback={null}>
      <Products />
    </Suspense>
  );
}
