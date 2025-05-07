import React, { useState } from 'react';

type Product = {
  id: number;
  name: string;
  price: number;
  category: 'polo' | 'basic' | 'printed';
  image: string;
};

const products: Product[] = [
  // Polo T-shirts
  ...Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `Classic Polo ${i + 1}`,
    price: 800,
    category: 'polo' as const,
    image: `https://picsum.photos/seed/polo${i}/400/500`,
  })),
  // Basic T-shirts
  ...Array.from({ length: 10 }, (_, i) => ({
    id: i + 11,
    name: `Essential Basic ${i + 1}`,
    price: 500,
    category: 'basic' as const,
    image: `https://picsum.photos/seed/basic${i}/400/500`,
  })),
  // Printed T-shirts
  ...Array.from({ length: 10 }, (_, i) => ({
    id: i + 21,
    name: `Artistic Print ${i + 1}`,
    price: 1000,
    category: 'printed' as const,
    image: `https://picsum.photos/seed/print${i}/400/500`,
  })),
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'polo' | 'basic' | 'printed'>('all');

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Collection</h1>
      
      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 rounded-lg ${
            selectedCategory === 'all' ? 'bg-indigo-600 text-white' : 'bg-gray-100'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setSelectedCategory('polo')}
          className={`px-4 py-2 rounded-lg ${
            selectedCategory === 'polo' ? 'bg-indigo-600 text-white' : 'bg-gray-100'
          }`}
        >
          Polo T-shirts (₹800)
        </button>
        <button
          onClick={() => setSelectedCategory('basic')}
          className={`px-4 py-2 rounded-lg ${
            selectedCategory === 'basic' ? 'bg-indigo-600 text-white' : 'bg-gray-100'
          }`}
        >
          Basic T-shirts (₹500)
        </button>
        <button
          onClick={() => setSelectedCategory('printed')}
          className={`px-4 py-2 rounded-lg ${
            selectedCategory === 'printed' ? 'bg-indigo-600 text-white' : 'bg-gray-100'
          }`}
        >
          Printed T-shirts (₹1000)
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
              <p className="text-indigo-600 font-bold">₹{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products; 