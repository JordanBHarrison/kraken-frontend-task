import { HeroSection, SpecsSection } from '../partials/product'
import { getProductById, Product } from '../services/productService'

export const getStaticProps = async () => {
  // product id hardcoded for now would be a query param in the url
  const product = await getProductById('1');

  return {
    props: {
      product,
    },
    revalidate: 60, // Revalidate every 60 seconds
  };
}

export default function ProductPage({ product }: { product: Product }) {
  const heroSectionSubheading = `${product.power} // ${product.quantity > 1 ? `Packet of ${product.quantity}` : 'Single'}`
  return (
    <div>
      <HeroSection 
        productId={product.id}
        imageUrl={product.img_url}
        name={product.name}
        subheading={heroSectionSubheading}
        price={product.price}  
      />
      <section className='px-4 py-6 bg-hemocyanin'>
        <div className='max-w-screen-md mx-auto'>
          <h2 className='text-2xl font-medium mb-6'>Description</h2>
          <p className='text-base font-light'>{product.description}</p>
        </div>
      </section>
      <SpecsSection
        productSpecs={{
          brand: product.brand,
          weight: product.weight,
          dimensions: `${product.length} x ${product.width} x ${product.height}`,
          modelNumber: product.model_code,
          colour: product.colour,
        }}
      />
    </div>
  )
}
