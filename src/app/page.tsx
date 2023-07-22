import About from 'features/About';
import Cart from 'features/Cart';
import Catalog from 'features/Catalog';
import Cover from 'features/Cover';
import Delivery from 'features/Delivery';
import Instagram from 'features/Instagram';
import Promo from 'features/Promo';

export default function HomePage() {
  return (
    <>
      <Cover />
      <Promo />
      <Catalog />
      <Delivery />
      <About />
      <Instagram />
      <Cart />
    </>
  );
}
