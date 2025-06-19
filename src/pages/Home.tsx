import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, Clock, Leaf, Play, TrendingUp, Shield, Globe } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import ExpertCard from '../components/ExpertCard';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({});

  const experts = [
    {
      id: 1,
      name: 'Dr. Sarah Mitchell',
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      expertise: 'Soil analysis and optimization specialist with expertise in organic tea cultivation',
      fee: '$100 per hour',
      rating: 4.9,
      reviews: 127,
      experience: '15+ years',
      specialties: ['Soil Analysis', 'Nutrient Management', 'pH Optimization', 'Organic Composting'],
      availability: 'Available Today',
      responseTime: 'Responds in 2h'
    },
    {
      id: 2,
      name: 'James Chen',
      image: 'https://images.pexels.com/photos/1181348/pexels-photo-1181348.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      expertise: 'Irrigation systems and water management specialist for sustainable tea farming',
      fee: '$120 per consultation',
      rating: 4.8,
      reviews: 89,
      experience: '12+ years',
      specialties: ['Drip Irrigation', 'Water Conservation', 'Drainage Systems', 'Smart Irrigation'],
      availability: 'Available This Week',
      responseTime: 'Responds in 1h'
    },
    {
      id: 3,
      name: 'Dr. Maria Rodriguez',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      expertise: 'Tea botanist specializing in plant breeding and sustainable cultivation practices',
      fee: '$150 per session',
      rating: 5.0,
      reviews: 156,
      experience: '20+ years',
      specialties: ['Plant Breeding', 'Grafting Techniques', 'Disease Resistance', 'Yield Optimization'],
      availability: 'Available Tomorrow',
      responseTime: 'Responds in 30m'
    }
  ];

  const stats = [
    { number: '500+', label: 'Tea Farms Transformed', icon: TrendingUp },
    { number: '50+', label: 'Expert Consultants', icon: Users },
    { number: '98%', label: 'Client Satisfaction', icon: Award },
    { number: '24/7', label: 'Support Available', icon: Clock }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Certified Experts',
      description: 'All our consultants are certified professionals with proven track records in tea cultivation'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving tea farmers worldwide with localized expertise and sustainable practices'
    },
    {
      icon: Award,
      title: 'Quality Guarantee',
      description: '100% satisfaction guarantee with comprehensive follow-up support included'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-green-700/70"></div>
        </div>
        
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4 max-w-5xl mx-auto">
            <div className="mb-6">
              <span className="inline-block bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-full px-6 py-2 text-sm font-semibold text-green-100 mb-4">
                🌱 Premium Tea Consultation Services
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              Transform Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-200">
                Tea Farm
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed max-w-3xl mx-auto">
              Connect with world-class tea experts and unlock the secrets of sustainable, profitable tea cultivation with personalized guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/experts"
                className="inline-flex items-center bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Book Expert Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <button className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transform hover:scale-105 transition-all duration-300">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-green-100 to-green-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-green-200 group-hover:to-green-300 transition-all duration-300">
                  <stat.icon className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Search Section */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Your Perfect Tea Expert</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Search through our network of certified tea cultivation specialists and find the perfect match for your farming needs
            </p>
          </div>

          <div className="mb-12">
            <SearchBar 
              onSearch={setSearchQuery}
              onFilter={setFilters}
              placeholder="Search for soil experts, irrigation specialists, botanists..."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experts.map((expert, index) => (
              <ExpertCard 
                key={expert.id} 
                expert={expert} 
                featured={index === 0}
              />
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

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Tea Project</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group p-8 rounded-xl hover:bg-green-50 transition-all duration-300">
                <div className="bg-gradient-to-r from-green-100 to-green-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-green-200 group-hover:to-green-300 transition-all duration-300">
                  <feature.icon className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQ />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Tea Farm?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of successful tea farmers who have revolutionized their cultivation practices with our expert guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/experts"
              className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-50 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Start Your Journey
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
    </div>
  );
};

export default Home;