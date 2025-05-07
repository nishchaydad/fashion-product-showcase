import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
        Style That Speaks
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl">
        T-Shirts for Every Vibe - Express yourself with our premium collection of men's t-shirts
      </p>
      <Link to="/products" className="btn-primary">
        Shop Now
      </Link>
      
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
          <p className="text-gray-600">Crafted with the finest materials for ultimate comfort</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Trending Designs</h3>
          <p className="text-gray-600">Stay ahead with our latest collection</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Easy Ordering</h3>
          <p className="text-gray-600">Simple process to get your favorite styles</p>
        </div>
      </div>
    </div>
  );
};

export default Home; 