"use client"

import { createContext, useEffect, useState, ReactNode } from 'react';
import { getProductById, Product } from '../services/productService';

type NewBasketItem = {
  id: string;
  quantity: number;
}

type BasketItem = {
  id: string;
  quantity: number;
  name: string;
  price: number;
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

  const addToBasket = async (newBasketItem: NewBasketItem) => {
    const existingItemIndex = basket.findIndex((item) => item.id === newBasketItem.id);

    // Check if the item already exists in the basket
    if (existingItemIndex !== -1) {
      setBasket((prev) => prev.map((item, index) =>
        index === existingItemIndex ? { ...item, quantity: item.quantity + newBasketItem.quantity } : item
      ));
    } else {
      // Fetch product metadata from the server
      const productData = await getProductById(newBasketItem.id)
      const newItem: BasketItem = {
        id: productData.id,
        quantity: newBasketItem.quantity,
        name: productData.name,
        price: productData.price,
      };
      setBasket(prev => [...prev, newItem]);
    }
  };

  const saveBasketToLocalStorage = () => {
    const storableBasket = basket.map((item) => ({
      id: item.id,
      quantity: item.quantity,
    }));
    localStorage.setItem('basket', JSON.stringify(storableBasket));
  }

  useEffect(() => {
    const fetchStoredBasket = async () => {
      const storedBasket = localStorage.getItem("basket");
      if (storedBasket) {
        const parsedBasket: NewBasketItem[] = JSON.parse(storedBasket);

        // Fetch product details for each item in the stored basket
        const basketItems: BasketItem[] = await Promise.all(
          parsedBasket.map(async (item) => {
            const productData = await getProductById(item.id);
            return {
              id: productData.id,
              quantity: item.quantity,
              name: productData.name,
              price: productData.price,
            };
          })
        );

        setBasket(basketItems);
      }
    };
    fetchStoredBasket();
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