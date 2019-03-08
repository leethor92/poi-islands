'use strict';

const Dashboard = {
  home: {
    handler: function(request, h) {
      return h.view('home', { title: 'Add a POI' });
    }
  },
  report: {
    handler: function(request, h) {
      return h.view('report', { title: 'Places to see so far', points: this.points});
    }
  },
  addPoint: {
    handler: function(request, h) {
      const data = request.payload;
      var memberEmail = request.auth.credentials.id;
      data.member = this.users[memberEmail];
      this.points.push(data);
      return h.redirect('/report');
    }
  },
};


module.exports = Dashboard;