"use client"

import { createContext, useEffect, useState, ReactNode } from 'react';
type NewBasketItem = {
  id: string;
  quantity: number;
}

type BasketItem = {
  id: string;
  quantity: number;
  name: string;
  price: number;
  img: string;
}

type Product = {
  id: number,
  name: string,
  power: string,
  description: string,
  price: number,
  quantity: number,
  brand: string,
  weight: number,
  height: number,
  width: number,
}

interface BasketContextType {
  basket: BasketItem[];
  addToBasket: (item: NewBasketItem) => void;
}

export const BasketContext = createContext<BasketContextType>({
  basket: [],
  addToBasket: () => {},
});

export const BasketProvider = ({ children }: { children: ReactNode }) => {
  const [basket, setBasket] = useState<BasketItem[]>([]);

  const addToBasket = (newBasketItem: NewBasketItem) => {
    setBasket((prev) => {
      const existingItemIndex = prev.findIndex((item) => item.id === newBasketItem.id);
      if (existingItemIndex !== -1) {
        return prev.map((item, index) =>
          index === existingItemIndex ? { ...item, quantity: item.quantity + newBasketItem.quantity } : item
        );
      }

      // If the item doesn't exist in the basket, add it
      // Fetch product data from the server
      // and add it to the basket with the required properties
    });
  };

  const fetchBasketItemsMetadata = async () => {
    // For each item in the basket, fetch the product data from the server

    // if data found add it to the library state object

    // if not found remove it from the basket state array
  };

  const saveBasketToLocalStorage = () => {
    const storableBasket = basket.map((item) => ({
      id: item.id,
      quantity: item.quantity,
    }));
    localStorage.setItem('basket', JSON.stringify(storableBasket));
  }

  useEffect(() => {
    const storedBasket = localStorage.getItem('basket');
    if (storedBasket) {
      const parsedBasket = JSON.parse(storedBasket);
      setBasket(parsedBasket);
    }
  }, []);

  useEffect(() => {
    saveBasketToLocalStorage();
  }, [basket]);

  return (
    <BasketContext.Provider value={{ basket, addToBasket }}>
      {children}
    </BasketContext.Provider>
  );
}