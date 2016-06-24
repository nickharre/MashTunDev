angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('mainMenu.mashTun', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mashTun.html',
        controller: 'mashTunCtrl'
      }
    }
  })

  .state('mainMenu.kegs', {
    url: '/kegs',
    views: {
      'side-menu21': {
        templateUrl: 'templates/kegs.html',
        controller: 'kegsCtrl'
      }
    }
  })

  .state('mainMenu.beers', {
    url: '/beers',
    views: {
      'side-menu21': {
        templateUrl: 'templates/beers.html',
        controller: 'beersCtrl'
      }
    }
  })

  .state('mainMenu.customers', {
    url: '/customers',
    views: {
      'side-menu21': {
        templateUrl: 'templates/customers.html',
        controller: 'customersCtrl'
      }
    }
  })
  
  .state('mainMenu.account', {
    url: '/account',
    views: {
      'side-menu21': {
        templateUrl: 'templates/account.html',
        controller: 'accountCtrl'
      }
    }
  })

  .state('mainMenu', {
    url: '/SideMenu',
    templateUrl: 'templates/mainMenu.html',
    abstract:true
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })

  .state('mashTunSignup', {
    url: '/signup',
    templateUrl: 'templates/mashTunSignup.html',
    controller: 'mashTunSignupCtrl'
  })
  

$urlRouterProvider.otherwise('/login')

  

});