const pointsOfInterest = require('./app/controllers/poicontroller');

module.exports = [{ method: 'GET', path: '/', config: pointsOfInterest.index }];