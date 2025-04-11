"use client";

import { useState } from "react";
import Image from "next/image";
import { CompactButton, PrimaryButton } from "../../components/buttons";
import { formatPrice } from "../../utils/helpers";

type HeroSectionProps = {
  imageUrl: string;
  name: string;
  subheading: string;
  price: number;
}

const HeroSection = ({ imageUrl, name, subheading, price } : HeroSectionProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity((prev) => prev + 1);

  const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : prev));

  return (
    <section className='px-5 py-6 max-w-screen-md mx-auto'>
      <div className='relative w-full max-w-[500px] mx-auto rounded-3xl aspect-[6/7] overflow-hidden'>
        <Image
          src={imageUrl}
          sizes='(max-width: 768px) 100vw, 80vw'
          layout='fill'
          alt='product image'
          priority
        />
      </div>
      <div className='max-w-[500px] mx-auto'>
        <div className='mt-4 mb-10 w-full '>
          <h1 className='text-4xl leading-normal font-medium'>{name}</h1>
          <p className='text-purplehaze'>{subheading}</p>
        </div>
        <div className='flex justify-between mb-8'>
          <p className='text-2xl font-medium'>{formatPrice(price)}</p>
          <div
            className='
              relative flex items-center gap-2.5 text-lg
              before:content-["Qty"] before:absolute before:-top-6 before:left-1/2 before:text-xs before:font-light before:text-ice 
              before:transform before:-translate-x-1/2
            '
          >
            <CompactButton onClick={handleDecrement} disabled={quantity < 2}>-</CompactButton>
            <span className='text-2xl w-4 text-center' title='Current quantity'>{quantity}</span>
            <CompactButton onClick={handleIncrement}>+</CompactButton>
          </div>
        </div>
        <div className='w-full max-w-[400px] mx-auto'>
          <PrimaryButton>Add to cart</PrimaryButton>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;