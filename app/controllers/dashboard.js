'use strict';

const PointOfInterest = require('../models/POI');
const User = require('../models/user');

const Dashboard = {
  home: {
    handler: function(request, h) {
      return h.view('home', { title: 'Explore the Irish isles' });
    }
  },

  addPOI: {
    handler: async function(request, h) {
      try {
        const id = request.auth.credentials.id;
        const user = await User.findById(id);
        const data = request.payload;
        const newPoint = new PointOfInterest({
          name: data.name,
          details: data.details,
          firstName: user.firstName,
          lastName: user.lastName
        });
        await newPoint.save();
        return h.redirect('/report');
      } catch (err) {
        return h.view('main', { errors: [{ message: err.message }] });
      }
    }
  },

  deletePOI:{
    handler: async function(request, h) {
      PointOfInterest.deleteByID(request.params.id)
      return h.view('/report');
    }
  },

  report: {
    handler: async function(request, h) {
      const pointsOfInterest = await PointOfInterest.find().populate('member');
      return h.view('report', {
        title: 'Places to see',
        points: pointsOfInterest
      });
    }
  },

  showSettings: {
    handler: async function(request, h) {
      try {
        const id = request.auth.credentials.id;
        const user = await User.findById(id);
        return h.view('settings', { title: 'POI Settings', user: user });
      } catch (err) {
        return h.view('login', { errors: [{ message: err.message }] });
      }
    }
  },

  updateSettings: {
    handler: async function(request, h) {
     try{
      const userEdit = request.payload;
      const id = request.auth.credentials.id;
      const user = await User.findById(id);
      user.firstName = userEdit.firstName;
      user.lastName = userEdit.lastName;
      user.email = userEdit.email;
      user.password = userEdit.password;
      await user.save();
      return h.redirect('/settings');
    } catch(err) {
       return h.view('main', { errors: [{ message: err.message }] });
     }
    }
  }

};


module.exports = Dashboard;