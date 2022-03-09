import { useEffect, useState } from "react";
import { useLocation } from "react-router";

function ViewProductPage(props) {
  const [product, setProduct] = useState(null);

  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      const { product } = location.state;
      setProduct(product);
    }
  }, [location]);

  console.log({ product, location });
  
  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>£{product.price}</p>
    </div>
  );
}

export default ViewProductPage;
