import { render, fireEvent } from "@testing-library/react";
import Product from "../pages/product";
import Layout from "../components/layout";
import { BasketContext } from "../context/basket-context";

const testProduct = {
  id: "1",
  name: "Test Product",
  power: "10W",
  description: "Test Description",
  price: 100,
  quantity: 1,
  brand: "Test Brand",
  weight: 100,
  height: 10,
  width: 10,
  length: 10,
  model_code: "Test Model",
  colour: "white",
  img_url: "http://example.com/test.jpg",
}

test("should be able to increase and decrease product quantity", async () => {
  const { getAllByTitle, getAllByText } = render(<Product product={testProduct}/>);

  const increaseQuantity = getAllByText("+");

  const currentQuantity = getAllByTitle("Current quantity");
  expect(currentQuantity[0]).toHaveTextContent("1");

  fireEvent.click(increaseQuantity[0]);
  expect(currentQuantity[0]).toHaveTextContent("2");

  const decreaseQuantity = getAllByText("-");

  fireEvent.click(decreaseQuantity[0]);
  expect(currentQuantity[0]).toHaveTextContent("1");
});

test("should be able to add items to the basket", async () => {
  const mockAddToBasket = jest.fn(); // Mock the addToBasket function
  const mockBasket = []; // Mock the initial basket state

  const { getAllByText, getAllByTitle } = render(
    <BasketContext.Provider value={{ basket: mockBasket, addToBasket: mockAddToBasket }}>
      <Layout>
        <Product product={testProduct} />
      </Layout>
    </BasketContext.Provider>
  );

  const increaseQuantity = getAllByText("+");
  const currentQuantity = getAllByTitle("Current quantity");

  // Increase the quantity to 4
  fireEvent.click(increaseQuantity[0]);
  fireEvent.click(increaseQuantity[0]);
  fireEvent.click(increaseQuantity[0]);

  expect(currentQuantity[0]).toHaveTextContent("4");

  // Add to basket
  const addToBasketElement = getAllByText("Add to cart");
  fireEvent.click(addToBasketElement[0]);

  // Assert that the mockAddToBasket function was called with the correct arguments
  expect(mockAddToBasket).toHaveBeenCalledWith({ id: "1", quantity: 4 });
});
