import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, Award, BookOpen, Calendar, MessageCircle, X } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

interface Expert {
  id: number;
  name: string;
  title?: string;
  image: string;
  expertise: string;
  rating: number;
  reviews: number;
  experience: string;
  specialties: string[];
  availability?: string;
  responseTime?: string;
}

interface ExpertCardProps {
  expert: Expert;
  featured?: boolean;
}

const BookingModal: React.FC<{ expert: Expert; open: boolean; onClose: () => void }> = ({ expert, open, onClose }) => {
  const [state, handleSubmit] = useForm("xzzgapvn");
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-lg relative animate-fadeIn">
        <button className="absolute top-4 right-4 text-gray-400 hover:text-green-600" onClick={onClose}><X className="h-6 w-6" /></button>
        <div className="flex flex-col items-center mb-6">
          <img src={expert.image} alt={expert.name} className="w-20 h-20 rounded-full object-cover mb-2" />
          <h2 className="text-xl font-bold text-gray-900">{expert.name}</h2>
          <p className="text-green-600 font-medium">{expert.title}</p>
        </div>
        {state.succeeded ? (
          <div className="text-center py-8">
            <h3 className="text-2xl font-bold text-green-600 mb-2">Booking Confirmed!</h3>
            <p className="text-gray-600 mb-4">Your booking with {expert.name} has been received. You'll get a confirmation email soon.</p>
            <button onClick={onClose} className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-lg font-semibold mt-2">Close</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="hidden" name="expert" value={expert.name} />
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input id="email" type="email" name="email" required className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500" placeholder="you@example.com" />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input id="subject" name="subject" type="text" required className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500" placeholder="Consultation topic (e.g. Soil Analysis)" />
              <ValidationError prefix="Subject" field="subject" errors={state.errors} className="text-red-500 text-sm mt-1" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                <input id="date" name="date" type="date" required className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500" />
                <ValidationError prefix="Date" field="date" errors={state.errors} className="text-red-500 text-sm mt-1" />
              </div>
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
                <input id="time" name="time" type="time" required className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500" />
                <ValidationError prefix="Time" field="time" errors={state.errors} className="text-red-500 text-sm mt-1" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea id="message" name="message" rows={3} required className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 resize-none" placeholder="Tell us about your needs or questions..." />
              <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
            </div>
            <button type="submit" disabled={state.submitting} className="w-full px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold hover:from-green-600 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300">{state.submitting ? 'Booking...' : 'Book Now'}</button>
          </form>
        )}
      </div>
    </div>
  );
};

const ProfileModal: React.FC<{ expert: Expert; open: boolean; onClose: () => void }> = ({ expert, open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-lg relative animate-fadeIn">
        <button className="absolute top-4 right-4 text-gray-400 hover:text-green-600" onClick={onClose}><X className="h-6 w-6" /></button>
        <div className="flex flex-col items-center mb-6">
          <img src={expert.image} alt={expert.name} className="w-24 h-24 rounded-full object-cover mb-2" />
          <h2 className="text-2xl font-bold text-gray-900 mb-1">{expert.name}</h2>
          {expert.title && <p className="text-green-600 font-medium mb-2">{expert.title}</p>}
        </div>
        <div className="mb-4 text-center">
          <p className="text-gray-700 mb-2">{expert.expertise}</p>
          <div className="flex flex-wrap justify-center gap-2 mb-2">
            {expert.specialties.map((s, i) => (
              <span key={i} className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">{s}</span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 mb-2">
            <span><Award className="inline h-4 w-4 mr-1" />{expert.experience}</span>
            <span><BookOpen className="inline h-4 w-4 mr-1" />{expert.reviews} reviews</span>
            {expert.responseTime && <span><MessageCircle className="inline h-4 w-4 mr-1" />{expert.responseTime}</span>}
            {expert.availability && <span className="text-green-600 font-semibold">{expert.availability}</span>}
          </div>
        </div>
        <button onClick={onClose} className="w-full mt-4 px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300">Close</button>
      </div>
    </div>
  );
};

const ExpertCard: React.FC<ExpertCardProps> = ({ expert, featured = false }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${featured ? 'ring-2 ring-green-500' : ''}`}>
      {featured && (
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white text-center py-2 text-sm font-semibold">
          ⭐ Featured Expert
        </div>
      )}
      
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
        {expert.availability && (
          <div className="absolute top-4 left-4 bg-green-500 text-white rounded-full px-3 py-1 text-xs font-semibold">
            {expert.availability}
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900">{expert.name}</h3>
          {expert.responseTime && (
            <div className="flex items-center text-green-600 text-sm">
              <MessageCircle className="h-4 w-4 mr-1" />
              <span>{expert.responseTime}</span>
            </div>
          )}
        </div>
        
        <p className="text-gray-600 mb-4 leading-relaxed">{expert.expertise}</p>

        <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Award className="h-4 w-4" />
              <span>{expert.experience}</span>
            </div>
            <div className="flex items-center space-x-1">
              <BookOpen className="h-4 w-4" />
              <span>{expert.reviews} reviews</span>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">Specialties:</h4>
          <div className="flex flex-wrap gap-1">
            {expert.specialties.slice(0, 2).map((specialty, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium"
              >
                {specialty}
              </span>
            ))}
            {expert.specialties.length > 2 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                +{expert.specialties.length - 2} more
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-1"
            >
              <Calendar className="h-4 w-4" />
              <span>Book</span>
            </button>
            <button
              onClick={() => setProfileOpen(true)}
              className="border border-green-500 text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300"
            >
              View Profile
            </button>
          </div>
        </div>
      </div>
      <BookingModal expert={expert} open={modalOpen} onClose={() => setModalOpen(false)} />
      <ProfileModal expert={expert} open={profileOpen} onClose={() => setProfileOpen(false)} />
    </div>
  );
};

export default ExpertCard;