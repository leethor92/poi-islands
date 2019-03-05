const pointsOfInterest = require('./app/controllers/poicontroller');

module.exports = [
  { method: 'GET', path: '/', config: pointsOfInterest.index },
  { method: 'GET', path: '/signup', config: pointsOfInterest.signup },
  { method: 'GET', path: '/login', config: pointsOfInterest.login },
  {
    method: 'GET', path: '/{param*}',
    handler: {
      directory: {
        path: './public'
      }
    }
  }
  ];
