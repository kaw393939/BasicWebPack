const City = require('../models/city.model');

exports.findAll = (req, res) => {
  City.findAll((err, cities) => {
    if (err) { res.send(err); }
    res.json({ data: cities });
  });
};

exports.create = (req, res) => {
  const newEmployee = new City(req.body);

  // handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    City.create(newEmployee, (err, employee) => {
      if (err) { res.send(err); }
      res.json({ error: false, message: 'Employee added successfully!', data: employee });
    });
  }
};

exports.findById = (req, res) => {
  City.findById(req.params.id, (err, employee) => {
    if (err) { res.send(err); }
    res.json(employee);
  });
};

exports.update = (req, res) => {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    City.update(req.params.id, new City(req.body), (err) => {
      if (err) { res.send(err); }
      res.json({ error: false, message: 'Employee successfully updated' });
    });
  }
};

exports.delete = (req, res) => {
  City.delete(req.params.id, (err) => {
    if (err) { res.send(err); }
    res.json({ error: false, message: 'Employee successfully deleted' });
  });
};
