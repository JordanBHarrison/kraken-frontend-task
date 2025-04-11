import { Fragment } from 'react';

type ProductSpecs = {
  brand: string;
  weight: number;
  dimensions: string;
  modelNumber: string;
  colour: string
}
type ProductSpecLabels = Record<keyof ProductSpecs, string> 

type ProductSpecificationsSectionProps = {
  productSpecs: ProductSpecs;
}

const productSpecLabels:ProductSpecLabels = {
  brand: "Brand",
  weight: "Item weight (g)",
  dimensions: "Dimensions (cm)",
  modelNumber: "Item model Number",
  colour: "Colour",
};

const SpecificationsSection = ({ productSpecs }: ProductSpecificationsSectionProps) => {
  return (
    <section className='px-4 py-6'>
      <div className='max-w-screen-md mx-auto'>
        <h2 className='text-2xl font-medium mb-6'>Specifications</h2>
        <div className='grid grid-cols-2 gap-x-4 gap-y-6 font-light'>
          {Object.entries(productSpecs)
            .filter(([key, _]) => key in productSpecLabels) // Filter out any keys not in productSpecLabels
            .map(([key, value]) => (
              <Fragment key={key}>
                <p>{productSpecLabels[key]}</p>
                <p>{value}</p>
              </Fragment>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default SpecificationsSection;