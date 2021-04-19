'user strict';

const dbConn = require('../config/db.config');
// city object create
const city = () => {
  this.fldName = city.fldName;
  this.fldLat = city.fldLat;
  this.fldLong = city.fldLong;
  this.fldCountry = city.fldCountry;
  this.fldAbbreviation = city.fldAbbreviation;
  this.fldCapitalStatus = city.fldCapitalStatus;
  this.fldPopulation = city.fldPopulation;
};
city.create = (newCity, result) => {
  dbConn.query('INSERT INTO tblCitiesImport set ?', newCity, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
city.findById = (id, result) => {
  dbConn.query('Select * from tblCitiesImport where id = ? ', id, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};
city.findAll = (result) => {
  dbConn.query('Select * from tblCitiesImport', (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
    } else {
      console.log('citys : ', res);
      result(null, res);
    }
  });
};
city.update = (id, result) => {
  dbConn.query('UPDATE tblCitiesImport SET fldName=?,fldLat=?,fldLong=?,fldCountry=?,fldAbbreviation=?,fldCapitalStatus=?,fldPopulation=? WHERE id = ?', [city.fldName, city.fldLat, city.fldLong, city.fldCountry, city.fldAbbreviation, city.fldCapitalStatus, city.fldPopulation, id], (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
city.delete = (id, result) => {
  dbConn.query('DELETE FROM tblCitiesImport WHERE id = ?', [id], (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = city;
