import axios from 'axios';
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
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      console.log('Fetching product with ID:', id); // Debugging
      axios
        .get<Product>(`https://dummyjson.com/products/${id}`)
        .then((response) => {
          setProduct(response.data);
        })
        .catch((error) => {
          console.error(`Error fetching product data: ${error}`);
          setError('Product not found or an error occurred.');
        });
    }
  }, [id]);

  if (error) {
    return <h1>{error}</h1>;
  }

  if (!product) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="p-5 w-[60%]">
      <button
        onClick={() => navigate(-1)}
        className="mb-5 px-4 py-2 bg-black text-white rounded"
      >
        Back
      </button>
      <img
        src={product.images?.[0] || 'fallback-image-url'}
        alt={product.title}
        className="w-[50%] h-auto mb-5"
      />
    </div>
  );
};

export default ProductPage;
