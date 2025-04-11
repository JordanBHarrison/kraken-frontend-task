
export type Product = {
  id: string;
  name: string;
  power: string;
  description: string;
  price: number;
  quantity: number;
  brand: string;
  weight: number;
  height: number;
  width: number;
  length: number;
  model_code: string;
  colour: string;
  img_url: string;
}

export const getProductById = async (id: string): Promise<Product> => {
  try {
    const res = await fetch("http://localhost:3001/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
          query GetProduct($id: ID!) {
            Product(id: $id) {
              id
              name
              power
              description
              price
              quantity
              brand
              weight
              height
              width
              length
              model_code
              colour
              img_url
            }
          }
        `,
        variables: { id },
      }),
    });

    const { data, errors } = await res.json();

    if (errors) throw new Error("Error fetching product with ID: " + id);

    return data.Product;
  } catch (error) {
    console.error(error)
  }
}