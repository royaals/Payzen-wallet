import request from 'supertest';
import { app } from '../index';
import db from '@repo/db/client';


jest.mock('@repo/db/client', () => ({
  $transaction: jest.fn(),
  balance: {
    updateMany: jest.fn(),
  },
  onRampTransaction: {
    updateMany: jest.fn(),
  },
}));

describe('POST /hdfcWebhook', () => {
  it('should capture payment and update the database', async () => {
    const mockTransaction = jest.fn().mockResolvedValue([{}, {}]);
    (db.$transaction as jest.Mock).mockImplementation(mockTransaction);

    const response = await request(app)
      .post('/hdfcWebhook')
      .send({
        token: '12345',
        user_identifier: '1',
        amount: '1000',
      });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Captured' });

    expect(db.$transaction).toHaveBeenCalledWith([
      db.balance.updateMany({
        where: {
          userId: 1,
        },
        data: {
          amount: {
            increment: 1000,
          },
        },
      }),
      db.onRampTransaction.updateMany({
        where: {
          token: '12345',
        },
        data: {
          status: 'Success',
        },
      }),
    ]);
  });

  it('should return an error if the transaction fails', async () => {
    const mockTransaction = jest.fn().mockRejectedValue(new Error('Transaction Error'));
    (db.$transaction as jest.Mock).mockImplementation(mockTransaction);

    const response = await request(app)
      .post('/hdfcWebhook')
      .send({
        token: '12345',
        user_identifier: '1',
        amount: '1000',
      });

    expect(response.status).toBe(411);
    expect(response.body).toEqual({ message: 'Error while processing webhook' });
  });
});
