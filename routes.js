'use strict';

const Dashboard = require('./app/controllers/dashboard');
const Accounts = require('./app/controllers/accounts');


module.exports = [
  { method: 'GET', path: '/', config: Accounts.index },
  { method: 'GET', path: '/signup', config: Accounts.showSignup },
  { method: 'GET', path: '/login', config: Accounts.showLogin },
  { method: 'GET', path: '/logout', config: Accounts.logout },
  { method: 'POST', path: '/login', config: Accounts.login },
  { method: 'POST', path: '/signup', config: Accounts.signup },
  { method: 'GET', path: '/settings', config: Accounts.showSettings },
  { method: 'POST', path: '/settings', config: Accounts.updateSettings },

  { method: 'GET', path: '/home', config: Dashboard.home },
  { method: 'GET', path: '/report', config: Dashboard.report },
  { method: 'POST', path: '/addpoi', config: Dashboard.addPOI },
  { method: 'GET', path: '/addpoi/deletePOI{id}', config: Dashboard.deletePOI},

  { method: 'GET', path: '/{param*}',
    handler: {
      directory: {
        path: './public'
      }
    },
    options: {auth: false}
  }
  ];
