export async function getProducts() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/products`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
}
