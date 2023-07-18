const request = require('supertest');
const app = require('../index');

describe('Customer Controller', () => {
  // Test the GET /api/customers endpoint
  describe('GET /api/customers', () => {
    it('should return all customers', async () => {
      const response = await request(app).get('/api/customers');
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toBeDefined();
    });
  });

  // Test the POST /api/customers endpoint
  describe('POST /api/customers', () => {
    it('should create a new customer', async () => {
      const newCustomer = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '1234567890',
      };
      const response = await request(app)
        .post('/api/customers')
        .send(newCustomer);
      expect(response.status).toBe(201);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toBeDefined();
    });
  });

  // Testing other customer controller endpoints...

});

