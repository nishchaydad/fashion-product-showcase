import React, { useState } from 'react';

type FormData = {
  name: string;
  email: string;
  message: string;
  selectedProducts: {
    polo: boolean;
    basic: boolean;
    printed: boolean;
  };
};

const Order = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    selectedProducts: {
      polo: false,
      basic: false,
      printed: false,
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    // For now, we'll just log the data
    console.log('Form submitted:', formData);
    alert('Thank you for your order! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      message: '',
      selectedProducts: {
        polo: false,
        basic: false,
        printed: false,
      },
    });
  };

  const handleProductChange = (product: keyof FormData['selectedProducts']) => {
    setFormData(prev => ({
      ...prev,
      selectedProducts: {
        ...prev.selectedProducts,
        [product]: !prev.selectedProducts[product],
      },
    }));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Place Your Order</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Products
          </label>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.selectedProducts.polo}
                onChange={() => handleProductChange('polo')}
                className="rounded text-indigo-600 focus:ring-indigo-500"
              />
              <span>Polo T-shirts (₹800 each)</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.selectedProducts.basic}
                onChange={() => handleProductChange('basic')}
                className="rounded text-indigo-600 focus:ring-indigo-500"
              />
              <span>Basic T-shirts (₹500 each)</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.selectedProducts.printed}
                onChange={() => handleProductChange('printed')}
                className="rounded text-indigo-600 focus:ring-indigo-500"
              />
              <span>Printed T-shirts (₹1000 each)</span>
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message (Specify quantities and any special requests)
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full btn-primary"
        >
          Submit Order
        </button>
      </form>
    </div>
  );
};

export default Order; 