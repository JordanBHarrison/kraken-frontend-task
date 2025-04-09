import { CompactButton, PrimaryButton } from "../../components/buttons";

const HeroSection = () => {
  return (
    <section className='px-4 py-6'>
      <div className='aspect-square w-full rounded-xl bg-gray-300' />
      <div className='mt-4 mb-10'>
        <h1 className='text-4xl leading-normal font-medium'>Product Name</h1>
        <p className='text-purplehaze'>25W // Packet of 4</p>
      </div>
      <div className='flex justify-between mb-8'>
        <p className='text-2xl font-medium'>£12.99</p>
        <div
          className='
            relative flex items-center gap-2.5 text-lg
            before:content-["Qty"] before:absolute before:-top-6 before:left-1/2 before:text-xs before:font-light before:text-ice 
             before:transform before:-translate-x-1/2
          '
        >
          <CompactButton>-</CompactButton>
          <span className='text-3xl'>1</span>
          <CompactButton>+</CompactButton>
        </div>
      </div>
      <div className='w-full max-w-[400px] mx-auto'>
        <PrimaryButton>Add to cart</PrimaryButton>
      </div>
    </section>
  )
}

export default HeroSection;