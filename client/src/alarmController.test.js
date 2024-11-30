// alarmController.test.js
const { createAlarm } = require('./alarmController');

describe('Create Alarm', () => {
  test('should create an alarm with valid data', () => {
    const req = {
      body: {
        title: 'Morning Alarm',
        time: '08:00 AM',
        description: 'Wake up reminder',
        frequency: ['Monday', 'Wednesday'],
        sound: true,
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    createAlarm(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.send).toHaveBeenCalledWith(expect.objectContaining({
      title: 'Morning Alarm',
      time: '08:00 AM',
    }));
  });

  test('should return 400 if time is missing', () => {
    const req = {
      body: {
        title: 'Morning Alarm',
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    createAlarm(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalledWith(expect.objectContaining({
      message: 'Time is required',
    }));
  });
});
