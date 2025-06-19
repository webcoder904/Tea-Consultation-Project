import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';

const ExpertBooking = () => {
  const { expertId } = useParams();
  const [state, handleSubmit] = useForm("xzzgapvn");

  // Example expert data (should match your actual data source)
  const experts = {
    '1': {
      name: 'Dr. Sarah Mitchell',
      title: 'Soil Analysis Expert',
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    },
    '2': {
      name: 'James Chen',
      title: 'Irrigation Specialist',
      image: 'https://images.pexels.com/photos/1181348/pexels-photo-1181348.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    },
    '3': {
      name: 'Dr. Maria Rodriguez',
      title: 'Tea Botanist',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    }
  };
  const expert = experts[expertId as keyof typeof experts];

  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h2>
          <p className="text-gray-600 mb-6">
            Your booking with {expert?.name} has been received. You'll get a confirmation email soon.
          </p>
          <Link
            to="/experts"
            className="block bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 mt-4"
          >
            Book Another Expert
          </Link>
        </div>
      </div>
    );
  }

  if (!expert) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Expert Not Found</h2>
          <Link to="/experts" className="text-green-600 hover:text-green-700">
            Back to Experts
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex flex-col items-center mb-8">
            <img
              src={expert.image}
              alt={expert.name}
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-900">{expert.name}</h2>
            <p className="text-green-600 font-medium">{expert.title}</p>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Book Consultation</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="hidden" name="expert" value={expert.name} />
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                placeholder="you@example.com"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                placeholder="Consultation topic (e.g. Soil Analysis, Irrigation, etc.)"
              />
              <ValidationError
                prefix="Subject"
                field="subject"
                errors={state.errors}
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Date
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                />
                <ValidationError
                  prefix="Date"
                  field="date"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Time
                </label>
                <input
                  id="time"
                  name="time"
                  type="time"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                />
                <ValidationError
                  prefix="Time"
                  field="time"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors resize-none"
                placeholder="Tell us about your needs or questions..."
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold hover:from-green-600 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              {state.submitting ? 'Booking...' : 'Book Now'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ExpertBooking;