// import { Test, TestingModule } from '@nestjs/testing';
// import { INestApplication } from '@nestjs/common';
// import * as request from 'supertest';
// import { AppModule } from '../src/app.module';
// import { Logger } from 'winston';
// import { WINSTON_MODULE_PROVIDER } from 'nest-winston';

// describe('UserController', () => {
//   let app: INestApplication;
//   let logger: Logger;

//   beforeEach(async () => {
//     const moduleFixture: TestingModule = await Test.createTestingModule({
//       imports: [AppModule],
//     }).compile();

//     app = moduleFixture.createNestApplication();
//     await app.init();

//     logger = app.get(WINSTON_MODULE_PROVIDER);
//   });

//   describe('POST /api/v1/users', () => {
//     it('should return 400 when request is invalid', async () => {
//       const response = await request(app.getHttpServer())
//         .post('/api/v1/users')
//         .send({
//           username: '',
//           password: '',
//           name: '',
//         });

//       logger.info(response.body);
//       expect(response.status).toBe(400);
//       expect(response.body.errors).toBeDefined();
//     });
//   });
// });
