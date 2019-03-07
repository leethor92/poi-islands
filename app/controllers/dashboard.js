'use strict';

const Dashboard = {
  home: {
    handler: function(request, h) {
      return h.view('home', { title: 'Explore the Irish Islands' });
    }
  }
};

module.exports = Dashboard;