import axios from "axios";

const AllProduct = async () => {
  try {
    const res = await axios.get("https://fakestoreapi.com/products");
    return res.data; // this will return actual product array
  } catch (err) {
    console.error("error fetching problem", err);
    return [];
  }
};

export default AllProduct;
