import React, { useState, useMemo } from 'react';
import { Star, Clock, Award, BookOpen, Filter, Grid, List } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import ExpertCard from '../components/ExpertCard';

const Experts = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<any>({});
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('rating');

  const experts = [
    {
      id: 1,
      name: 'Dr. Sarah Mitchell',
      title: 'Soil Analysis Expert',
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      expertise: 'Soil analysis and optimization specialist with expertise in organic tea cultivation and sustainable farming practices',
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
      title: 'Irrigation Specialist',
      image: 'https://images.pexels.com/photos/1181348/pexels-photo-1181348.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      expertise: 'Irrigation systems and water management specialist for sustainable tea farming operations',
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
      title: 'Tea Botanist',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      expertise: 'Tea botanist specializing in plant breeding, disease resistance, and sustainable cultivation practices',
      rating: 5.0,
      reviews: 156,
      experience: '20+ years',
      specialties: ['Plant Breeding', 'Grafting Techniques', 'Disease Resistance', 'Yield Optimization'],
      availability: 'Available Tomorrow',
      responseTime: 'Responds in 30m'
    },
    {
      id: 4,
      name: 'Dr. Robert Kim',
      title: 'Climate Analysis Expert',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      expertise: 'Climate analysis expert specializing in seasonal planning and weather pattern optimization for tea cultivation',
      rating: 4.9,
      reviews: 98,
      experience: '18+ years',
      specialties: ['Climate Analysis', 'Seasonal Planning', 'Weather Patterns', 'Harvest Timing'],
      availability: 'Available Next Week',
      responseTime: 'Responds in 4h'
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      title: 'Harvesting & Processing Expert',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      expertise: 'Harvesting and post-harvest processing expert with focus on quality control and storage optimization',
      rating: 4.7,
      reviews: 73,
      experience: '14+ years',
      specialties: ['Harvesting Methods', 'Post-Harvest Processing', 'Quality Control', 'Storage Solutions'],
      availability: 'Available Today',
      responseTime: 'Responds in 3h'
    },
    {
      id: 6,
      name: 'Dr. Ahmed Hassan',
      title: 'Sustainable Farming Expert',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      expertise: 'Sustainable farming practices expert with specialization in organic certification and eco-friendly cultivation',
      rating: 4.8,
      reviews: 112,
      experience: '16+ years',
      specialties: ['Organic Certification', 'Sustainable Practices', 'Eco-friendly Methods', 'Pest Management'],
      availability: 'Available This Week',
      responseTime: 'Responds in 1h'
    }
  ];

  const filteredAndSortedExperts = useMemo(() => {
    let filtered = experts.filter(expert => {
      const matchesSearch = expert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           expert.expertise.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           expert.specialties.some(specialty => 
                             specialty.toLowerCase().includes(searchQuery.toLowerCase())
                           );

      const matchesSpecialty = !filters.specialty || 
                              expert.specialties.some(specialty => 
                                specialty.toLowerCase().includes(filters.specialty.toLowerCase())
                              );

      const matchesRating = !filters.rating || expert.rating >= parseFloat(filters.rating);

      return matchesSearch && matchesSpecialty && matchesRating;
    });

    // Sort experts
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'reviews':
          return b.reviews - a.reviews;
        case 'experience':
          return parseInt(b.experience) - parseInt(a.experience);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, filters, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Meet Our Tea Farming Experts</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            Connect with certified tea cultivation specialists who bring decades of experience 
            in organic farming, sustainable practices, and tea quality optimization.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SearchBar 
            onSearch={setSearchQuery}
            onFilter={setFilters}
            placeholder="Search for soil experts, irrigation specialists, botanists..."
          />
          
          <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-4">
            <div className="flex items-center space-x-4">
              <span className="text-gray-600 font-medium">
                {filteredAndSortedExperts.length} experts found
              </span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-green-100 text-green-600' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-green-100 text-green-600' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <label className="text-gray-600 font-medium">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              >
                <option value="rating">Highest Rated</option>
                <option value="reviews">Most Reviews</option>
                <option value="experience">Most Experienced</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Expert Consultants</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">1000+</div>
              <div className="text-gray-600">Successful Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Experts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredAndSortedExperts.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Filter className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No experts found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or filters</p>
            </div>
          ) : (
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
              {filteredAndSortedExperts.map((expert, index) => (
                <ExpertCard 
                  key={expert.id} 
                  expert={expert} 
                  featured={index === 0 && sortBy === 'rating'}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Tea Farm?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Book a consultation with our experts today and take the first step towards sustainable, 
            profitable tea cultivation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-50 transform hover:scale-105 transition-all duration-300 shadow-xl">
              Schedule Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transform hover:scale-105 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experts;