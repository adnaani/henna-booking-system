export const availabilityResponseExample = {
  date: '2025-12-18',
  locationType: 'HOME_VISIT',
  groupSize: 3,
  services: [
    {
      id: 'd9b4d1f4-3a5e-4f3b-8c6e-1234567890ab',
      name: 'Bridal Henna',
      description: 'Detailed bridal design',
      price: 150,
      durationMinutes: 90,
      active: true,
      createdAt: '2025-12-10T12:34:56.000Z',
      updatedAt: '2025-12-10T12:34:56.000Z',
    },
  ],
  totalDurationMinutes: 285,
  slots: [
    { start: '09:00', end: '13:45', durationMinutes: 285 },
    { start: '09:30', end: '14:15', durationMinutes: 285 },
  ],
};

export const availabilityRequestExample = {
  locationType: 'MOBILE',
  groupSize: 1,
  serviceIds: [
    '64ccd68c-912a-4b59-9562-a8803cc67d43',
    '65fdf253-4e28-4b47-9f7b-7a805a6c97f7',
  ],
  date: '2025-12-18',
  postcode: 'M123AB',
};
