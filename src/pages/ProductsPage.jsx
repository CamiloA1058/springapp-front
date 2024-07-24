import { useEffect, useState } from "react";
import { req } from "../axios_helper";

export const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    req("GET", "/api/v1/public/products")
    .then((res) => setProducts(res.data));
  }, []);


  return (
    <div>
      {products.map((e) => (
        <h3 key={e.productId}>{e.productName}</h3>
      ))}
    </div>
  );
};
