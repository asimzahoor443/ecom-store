import { useEffect, useState } from 'react';

interface Product {
  category: string;
}

interface FetchResponse {
  products: Product[];
}
const Sidebar = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [keywords] = useState<string[]>({
    // 'apple',
    // 'watch',
    // 'Fashion',
    // 'trend',
    // 'shoes',
    // 'shirt',
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data: FetchResponse = await response.json();
        console.log(data);
        const uniqueCategories = Array.from(
          new Set(data.products.map((product) => product.category))
        );
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Error fetching product', error);
      }
    };
    fetchCategories();
  }, []);
  return (
    <div className="w-64 p-5 h-screen">
      <h1 className="text-2xl font-bold mb-10 mt-4">Fashon Store</h1>

      <section>
        <input
          type="text"
          className="border-2 rounded px-2 sm:mb-0"
          placeholder="Search Product"
        />
        <div className="flex justify-center items-center">
          <input
            type="text"
            className="border-2 mr-2 px-5 py-3 mb-3 w-full"
            placeholder="Min"
          />
          <input
            type="text"
            className="border-2 mr-2 px-5 py-3 mb-3 w-full"
            placeholder="Max"
          />
        </div>

        {/* Categories Section */}
        <div className="mb-5">
          <div className="text-xl font-semibold mb-3">Categories</div>
          {categories.map((category, index) => (
            <label key={index} className="block mb-2">
              <input type="text" />
            </label>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
