"use client"

import { useState } from 'react';
import Image from "next/image";
import logo from '../public/octopus-logo.svg';
import useBasket from '../hook/useBasket';
import { formatPrice } from "../utils/helpers";

const Header = () => {
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const { basket } = useBasket();

  const toggleBasket = () => {
    setIsBasketOpen((prev) => !prev);
  };

  return (
    <section className='flex justify-between items-center p-4 max-w-screen-lg mx-auto'>
      <div className='relative w-full max-w-[250px] sm:max-w-[300px] lg:max-w-[350px]'>
        <Image
          src={logo}
          alt='octopus logo'
          className='rounded-full'
        />
      </div>
      <div className='relative'>
        <Image
          src='/basket.svg'
          className='aspect-square w-8'
          width={32}
          height={32}
          alt='Basket Icon'
          onClick={toggleBasket}
        />
        {isBasketOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/10 z-10"
              onClick={toggleBasket}
            />

            <div className='absolute right-0 mt-2 p-4 w-64 bg-black/90 shadow-xl rounded-xl z-10'>
              <h3 className='text-lg font-medium mb-2'>Basket Items</h3>
              <ul className='w-full'>
                {basket.map((item) => (
                  <li key={item.id} className='flex justify-between gap-2'>
                    <span className='whitespace-nowrap text-ellipsis'>{item.name}</span>
                    <span>{formatPrice(item.price)}</span>
                  </li>
                ))}
              </ul>
              <button className='mt-4 w-full bg-purple-600 text-white py-2 rounded-lg'>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Header;