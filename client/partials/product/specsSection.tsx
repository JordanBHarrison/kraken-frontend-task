
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
      <h2 className='text-2xl font-medium mb-6'>Specifications</h2>
      <div className='grid grid-cols-2 gap-4 font-light'>
        {Object.keys(productSpecs).map((key) => (
          <>
            <p key={`label-${key}`}>{productSpecLabels[key]}</p>
            <p key={`${key}`}>{productSpecs[key]}</p>
          </>
        ))}
      </div>

    </section>
  )
}

export default SpecificationsSection;