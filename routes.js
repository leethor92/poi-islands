const pointsOfInterest = require('./app/controllers/poicontroller');

module.exports = [
  { method: 'GET', path: '/', config: pointsOfInterest.index },
  {
    method: 'GET', path: '/{param*}',
    handler: {
      directory: {
        path: './public'
      }
    }
  }
  ];
