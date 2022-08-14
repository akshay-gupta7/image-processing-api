import supertest from 'supertest';
import app from '../index';
//import { processImage } from '.../'
import { processImage } from '../../utilities/imageprocess';

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
    expect(async () => {
      await processImage('argentina', 200, 200);
    }).not.toThrow();
    //done();
  });
});
