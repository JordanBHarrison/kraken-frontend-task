import { HeroSection, SpecsSection } from '../partials/product'

export default function Product() {
  return (
    <div>
      <HeroSection />
      <section className='px-4 py-6 bg-hemocyanin'>
        <h2 className='text-2xl font-medium mb-6'>Description</h2>
        <p className='text-base font-light'>
          Available in 7 watts, 9 watts, 11 watts Spiral Light bulb in B22, bulb switches on instantly, no wait
          around warm start and flicker free features make for a great all purpose bulb.
        </p>
      </section>
      <SpecsSection
        productSpecs={{
          brand: 'test',
          weight: 100,
          dimensions: '10 x 10 x 10',
          modelNumber: 'test',
          colour: 'white',
        }}
      />
    </div>
  )
}
