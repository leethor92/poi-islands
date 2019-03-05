const pointsOfInterest = {
  index: {
    handler: function(request, h) {
      return h.view('main',{title: 'Welcome to the Irish Islands POI'});
    }
  },
  signup: {
    handler: function(request, h) {
      return h.view('signup',{title: 'Sign up for a POI account'})
    }
  },
  login: {
    handler: function(request, h) {
      return h.view('login',{title: 'Login to your POI account'})
    }
   }
}

module.exports = pointsOfInterest;