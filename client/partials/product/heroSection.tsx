"use client";

import { useState } from "react";
import Image from "next/image";
import { PrimaryButton } from "../../components/buttons";
import QtySelector from "../../components/qtySelector";
import { formatPrice } from "../../utils/helpers";
import useBasket from "../../hook/useBasket";

type HeroSectionProps = {
  productId: string;
  imageUrl: string;
  name: string;
  subheading: string;
  price: number;
  description: string;
}

const HeroSection = ({ productId, imageUrl, name, subheading, price, description } : HeroSectionProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addToBasket } = useBasket();

  const handleIncrement = () => setQuantity((prev) => prev + 1);

  const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : prev));

  return (
    <>
      <section className='max-w-screen-md w-full mx-auto'>
        <div className='px-5'>
          <div className='relative w-full max-w-[500px] mx-auto aspect-[6/7] overflow-hidden'>
            <Image
              src={imageUrl}
              sizes='(max-width: 768px) 100vw, 80vw'
              layout='fill'
              className='rounded-3xl'
              alt='product image'
              priority
            />
          </div>
        </div>
        <div className='block md:hidden'>
          <ProductDetails
            product={{ productId, name, subheading, price, description }}
            incrementQty={handleIncrement}
            decrementQty={handleDecrement}
            currentQty={quantity}
            addToBasket={addToBasket}
          />
        </div>
      </section>
      <div className='hidden md:block'>
        <ProductDetails
          product={{ productId, name, subheading, price, description }}
          incrementQty={handleIncrement}
          decrementQty={handleDecrement}
          currentQty={quantity}
          addToBasket={addToBasket}
        />
      </div>
    </>
  )
}


type ProductDetailsProps = {
  product: {
    productId: string;
    name: string;
    subheading: string;
    price: number;
    description: string;
  };
  incrementQty: () => void;
  decrementQty: () => void;
  currentQty: number;
  addToBasket: (item: { id: string; quantity: number }) => void;
}

const ProductDetails = ({ product, incrementQty, decrementQty, currentQty, addToBasket} : ProductDetailsProps) => {

  return (
    <section>
      <div className='px-5 max-w-[500px] mx-auto box-content'>
        <div className='mt-4 mb-10 w-full'>
          <h1 className='text-4xl leading-normal font-medium'>{product.name}</h1>
          <p className='text-purplehaze'>{product.subheading}</p>
        </div>
        <div className='flex justify-between mb-8'>
          <p className='text-2xl font-medium'>{formatPrice(product.price)}</p>
          <QtySelector
            currentQuantity={currentQty}
            handleDecrement={decrementQty}
            handleIncrement={incrementQty}
          />
        </div>
        <div className='w-full max-w-[400px] mx-auto mb-8'>
          <PrimaryButton onClick={() => addToBasket({ id: product.productId, quantity: currentQty })}>Add to cart</PrimaryButton>
        </div>
      </div>

      <div className='px-5 py-6 bg-hemocyanin md:rounded-2xl md:py-12'>
        <div className='max-w-screen-md mx-auto'>
          <h2 className='text-2xl font-medium mb-6'>Description</h2>
          <p className='text-base font-light'>{product.description}</p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;