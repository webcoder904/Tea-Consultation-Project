import React from 'react';
import { Leaf, Award, Clock, Users } from 'lucide-react';

const Products = () => {
  const categories = [
    {
      name: 'Green Tea',
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Premium organic green tea with rich antioxidants and natural flavors',
      products: ['Sencha', 'Matcha', 'Jasmine Green Tea', 'Earl Grey Green']
    },
    {
      name: 'Black Tea',
      image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Full-bodied black teas with robust flavor and perfect morning brew',
      products: ['English Breakfast', 'Earl Grey', 'Assam', 'Ceylon']
    },
    {
      name: 'Herbal Tea',
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Caffeine-free herbal blends for relaxation and wellness',
      products: ['Chamomile', 'Peppermint', 'Ginger Lemon', 'Lavender']
    },
    {
      name: 'White Tea',
      image: 'https://images.pexels.com/photos/1638267/pexels-photo-1638267.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Delicate and subtle white teas with gentle, refined taste',
      products: ['Silver Needle', 'White Peony', 'Moonlight White', 'Aged White']
    },
    {
      name: 'Oolong Tea',
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Semi-fermented teas with complex flavors and aromatic profiles',
      products: ['Ti Kuan Yin', 'Da Hong Pao', 'Dong Ding', 'High Mountain']
    },
    {
      name: 'Specialty Blends',
      image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Unique tea blends crafted by our master tea blenders',
      products: ['Breakfast Blend', 'Evening Blend', 'Wellness Mix', 'Seasonal Special']
    }
  ];

  const features = [
    {
      icon: Leaf,
      title: 'Organic Certified',
      description: 'All our teas are certified organic and sustainably sourced'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Hand-picked leaves from the finest tea gardens worldwide'
    },
    {
      icon: Clock,
      title: 'Fresh Processing',
      description: 'Processed within hours of harvest to maintain peak freshness'
    },
    {
      icon: Users,
      title: 'Expert Curation',
      description: 'Curated by tea masters with decades of experience'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Tea Collection</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            Discover our premium selection of organic teas, carefully curated from the world's finest tea gardens. 
            Each blend tells a story of tradition, quality, and sustainable farming practices.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-green-100 to-green-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-green-200 group-hover:to-green-300 transition-all duration-300">
                  <feature.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tea Categories</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our diverse range of tea categories, each offering unique flavors and health benefits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">{category.name}</h3>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">{category.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Popular Varieties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.products.map((product, productIndex) => (
                        <span
                          key={productIndex}
                          className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full font-medium"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105">
                    View Products
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Need Expert Guidance?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Our tea experts can help you choose the perfect blend for your taste preferences and brewing methods.
          </p>
          <button className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-50 transform hover:scale-105 transition-all duration-300 shadow-xl">
            Consult Our Experts
          </button>
        </div>
      </section>
    </div>
  );
};

export default Products;