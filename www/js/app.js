// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    if( ionic.Platform.isAndroid() )  { 
      admobid = { // for Android
          banner: 'ca-app-pub-3010675545068145/8100948513' // Change this to your Ad Unit Id for banner...
      };

      if(AdMob) 
          AdMob.createBanner( {
            adId:admobid.banner, 
            position:AdMob.AD_POSITION.BOTTOM_CENTER, 
            autoShow:true
          } );
    }
  });
})

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  
  .state('home',{
    url:'/home',
    templateUrl:'templates/home.html'
  })
  
  .state('page',{
    url:'/page',
    templateUrl:'templates/page.html'
  })

  .state('page1',{
    url:'/page1',
    templateUrl:'templates/page1.html'
  })
  
  .state('page2',{
    url:'/page2',
    templateUrl:'templates/page2.html'
  })

  .state('page3',{
    url:'/page3',
    templateUrl:'templates/page3.html'
  })

  .state('page4',{
    url:'/page4',
    templateUrl:'templates/page4.html'
  })

  .state('page5',{
    url:'/page5',
    templateUrl:'templates/page5.html'
  })

  .state('page6',{
    url:'/page6',
    templateUrl:'templates/page6.html'
  })

  .state('page7',{
    url:'/page7',
    templateUrl:'templates/page7.html'
  })

  .state('page8',{
    url:'/page8',
    templateUrl:'templates/page8.html'
  })

  $urlRouterProvider.otherwise('/home');
})