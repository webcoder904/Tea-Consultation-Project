import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, Clock, Search, Star, Calendar, MessageCircle } from 'lucide-react';
import { EXPERT_CATEGORIES } from '../config';
import { mockExperts } from '../mock/user';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const stats = [
    { number: '500+', label: 'Farmers Helped', icon: Users },
    { number: '50+', label: 'Expert Consultants', icon: Award },
    { number: '98%', label: 'Success Rate', icon: Star },
    { number: '24/7', label: 'Support Available', icon: Clock }
  ];

  const featuredExperts = mockExperts.slice(0, 3);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
          }}
        />
        
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <div className="mb-8 animate-fadeIn">
            <span className="inline-block glass-effect rounded-full px-6 py-3 text-sm font-semibold text-white mb-6 border border-white/20">
              🌾 Connect with Agricultural Experts
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-slideIn">
            Transform Your
            <span className="block gradient-text text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              Farming Future
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-200 leading-relaxed max-w-4xl mx-auto animate-fadeIn">
            Get expert consultation from certified agricultural professionals. Boost your crop yield, 
            optimize resources, and implement sustainable farming practices.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fadeIn">
            <Link
              to="/experts"
              className="inline-flex items-center bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Find Experts Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center glass-effect text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transform hover:scale-105 transition-all duration-300 border border-white/30"
            >
              Learn More
            </Link>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto animate-fadeIn">
            <div className="relative">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for soil experts, irrigation specialists, crop consultants..."
                className="w-full pl-16 pr-6 py-4 rounded-full glass-effect text-white placeholder-gray-300 border border-white/30 focus:border-green-400 focus:ring-4 focus:ring-green-400/20 outline-none transition-all duration-300 text-lg"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-custom">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group animate-fadeIn" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="bg-gradient-to-r from-green-100 to-green-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-green-200 group-hover:to-green-300 transition-all duration-300 transform group-hover:scale-110">
                  <stat.icon className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Categories */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Expert Categories</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose from our diverse range of agricultural experts, each specializing in different aspects of modern farming
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {EXPERT_CATEGORIES.map((category, index) => (
              <Link
                key={category.id}
                to={`/experts?category=${category.id}`}
                className="group text-center animate-fadeIn"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center text-4xl group-hover:scale-110 transform transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                  {category.icon}
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Experts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Experts</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet our top-rated agricultural consultants ready to help transform your farming operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredExperts.map((expert, index) => (
              <div key={expert.id} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeIn" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative">
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center space-x-1 shadow-lg">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold text-gray-900">{expert.rating}</span>
                  </div>
                  <div className="absolute top-4 left-4 bg-green-500 text-white rounded-full px-3 py-1 text-xs font-semibold">
                    {expert.availability}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{expert.name}</h3>
                    <div className="flex items-center text-green-600 text-sm">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      <span>{expert.responseTime}</span>
                    </div>
                  </div>
                  
                  <p className="text-green-600 font-medium mb-2">{expert.title}</p>
                  <p className="text-gray-600 mb-4 leading-relaxed">{expert.expertise}</p>

                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <Award className="h-4 w-4 mr-1" />
                        {expert.experience}
                      </span>
                      <span className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {expert.reviews} reviews
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-gray-900">
                      ${expert.hourlyRate}
                      <span className="text-sm font-normal text-gray-500">/hour</span>
                    </div>
                    <Link
                      to={`/experts/${expert.id}`}
                      className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-full font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-1"
                    >
                      <Calendar className="h-4 w-4" />
                      <span>Book Now</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/experts"
              className="inline-flex items-center bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              View All Experts
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Farm?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of successful farmers who have revolutionized their operations with expert guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-50 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transform hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;