const axios = require('axios');

const BASE_URL = 'https://jsonplaceholder.typicode.com';

describe('API Testing Suite - JSONPlaceholder', () => {

  // Test 1: GET Request assertion & performance check
  test('GET /posts/1 should return status 200 and validate response time', async () => {
    const startTime = Date.now();
    const response = await axios.get(`${BASE_URL}/posts/1`);
    const duration = Date.now() - startTime;

    // Assert status code
    expect(response.status).toBe(200);

    // Assert payload fields
    expect(response.data).toHaveProperty('id', 1);
    expect(response.data).toHaveProperty('title');

    // Assert response time performance (< 1000ms)
    expect(duration).toBeLessThan(1000);
  });

  // Test 2: POST Request assertion
  test('POST /posts should create a new resource successfully', async () => {
    const newPost = {
      title: 'QA Test Post',
      body: 'Automated test payload body',
      userId: 1,
    };

    const response = await axios.post(`${BASE_URL}/posts`, newPost);

    expect(response.status).toBe(201);
    expect(response.data.title).toBe(newPost.title);
  });
});