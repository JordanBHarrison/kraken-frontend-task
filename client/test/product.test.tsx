import { render, fireEvent } from "@testing-library/react";
import Product from "../pages/product";

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
  const { getByText, getByTitle } = render(<Product product={testProduct}/>);

  const increaseQuantity = getByText("+");

  const currentQuantity = getByTitle("Current quantity");
  expect(currentQuantity).toHaveTextContent("1");

  fireEvent.click(increaseQuantity);
  expect(currentQuantity).toHaveTextContent("2");

  const decreaseQuantity = getByText("-");

  fireEvent.click(decreaseQuantity);
  expect(currentQuantity).toHaveTextContent("1");
});

test("should be able to add items to the basket", async () => {
  const { getByText, getByTitle } = render(<Product product={testProduct} />);

  const increaseQuantity = getByText("+");

  const currentQuantity = getByTitle("Current quantity");

  fireEvent.click(increaseQuantity);
  fireEvent.click(increaseQuantity);
  fireEvent.click(increaseQuantity);

  expect(currentQuantity).toHaveTextContent("4");

  const addToBasketElement = getByText("Add to cart");
  fireEvent.click(addToBasketElement);

  const basketItems = getByTitle("Basket items");
  expect(basketItems).toHaveTextContent("4");
});
