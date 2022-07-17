import supertest from 'supertest';
import app from '../index';
import { processImage } from '../imageprocess';

const request = supertest(app);

describe('Test endpoint responses', ()=>{
    it('gets the api endpoint', async()=>{
        const response = await request.get('/api');
        expect(response.status).toBe(200);
        //done();
    });
});

it('should return that file does not exist', ()=>{
    const value = processImage("and", 0 , 0);
    expect(value).toBe(false);
});