import supertest from 'supertest';
import app from '../index';
//import { processImage } from '.../'

const request = supertest(app);

describe('Test endpoint responses', () => {
  it('gets the api endpoint', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
    //done();
  });
});

describe('Test for resizing', () => {
  it('test image with correct input', async () => {
    const response = await request.get('/api/images?images?filename=argentina&width=200&height=200');
    expect(response.status).toBe(200);
    //done();
  });
});
