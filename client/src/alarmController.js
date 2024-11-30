// alarmController.js
exports.createAlarm = (req, res) => {
    const { title, time, description, frequency, sound } = req.body;
  
    if (!time) {
      return res.status(400).send({ message: 'Time is required' });
    }
  
    const newAlarm = {
      title: title || 'Alarm',
      time,
      description,
      frequency,
      sound,
    };
  
    // Assume alarms are saved to an in-memory list
    alarms.push(newAlarm);
    return res.status(201).send(newAlarm);
  };
  