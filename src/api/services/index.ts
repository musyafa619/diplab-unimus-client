import api from '../axios';

export const getAvailableItems = (params?: Record<string, unknown>) =>
  api.get('/api/available-items', { params }).then((r) => r.data);

export const getStudentData = (nim?: string) =>
  api.get(`/api/student/${nim}`).then((r) => r.data);

export const createBooking = (payload?: Record<string, unknown>) =>
  api.post(`/api/bookings`, payload).then((r) => r.data);
