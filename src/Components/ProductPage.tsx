import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  images: string[];
}
const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {}, [id]);
  return <div>ProductPage</div>;
};

export default ProductPage;
