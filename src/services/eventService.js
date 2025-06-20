import { mockExperts } from '../mock/user';

export const eventService = {
  // Get all experts (events)
  getAllExperts: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockExperts);
      }, 500);
    });
  },

  // Get expert by ID
  getExpertById: async (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const expert = mockExperts.find(e => e.id === parseInt(id));
        if (expert) {
          resolve(expert);
        } else {
          reject(new Error('Expert not found'));
        }
      }, 300);
    });
  },

  // Get experts by category
  getExpertsByCategory: async (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const experts = mockExperts.filter(e => e.category === category);
        resolve(experts);
      }, 400);
    });
  },

  // Search experts
  searchExperts: async (query) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const experts = mockExperts.filter(expert => 
          expert.name.toLowerCase().includes(query.toLowerCase()) ||
          expert.expertise.toLowerCase().includes(query.toLowerCase()) ||
          expert.specialties.some(specialty => 
            specialty.toLowerCase().includes(query.toLowerCase())
          )
        );
        resolve(experts);
      }, 400);
    });
  },

  // Book consultation
  bookConsultation: async (expertId, bookingData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const booking = {
          id: Date.now(),
          expertId,
          ...bookingData,
          status: 'pending',
          createdAt: new Date().toISOString()
        };
        resolve(booking);
      }, 600);
    });
  }
};