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

export default ({ product }: { product: Product }) => {
  const heroSectionSubheading = `${product.power} // ${product.quantity > 1 ? `Packet of ${product.quantity}` : 'Single'}`
  return (
    <div className='py-4 max-w-screen-lg mx-auto md:py-8 md:grid md:grid-cols-[2fr_1.5fr] md:gap-6'>
      <HeroSection 
        productId={product.id}
        imageUrl={product.img_url}
        name={product.name}
        subheading={heroSectionSubheading}
        description={product.description}
        price={product.price}  
      />
      <div className='md:col-span-2'>
        <SpecsSection
          productSpecs={{
            brand: product.brand,
            weight: product.weight,
            dimensions: `${product.height} x ${product.length} x ${product.width}`,
            modelNumber: product.model_code,
            colour: product.colour,
          }}
        />
      </div>
    </div>
  )
}
