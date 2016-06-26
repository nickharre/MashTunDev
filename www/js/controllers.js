angular.module('app.controllers', [])
  
.controller('mashTunCtrl', function($scope) {

})
   
.controller('kegsCtrl', function($scope, $ionicModal,Kegs,$ionicListDelegate, $ionicPopover,Customers, Beers, Users, $state) {
        
    //DEFINE ARRAYS
    $scope.kegs = Kegs;
    $scope.customers = Customers;
    $scope.beers=Beers;
    $scope.user = Users.ref().getAuth();
    
    //ADD KEG FUNCTION
    $scope.addKeg = function(data) {
        $scope.kegs.$add({
            "by": $scope.user.password.email,
            "label": 'Keg ' + data.label,
            "vol": data.vol,
            "contents": 'Empty',
            "location": 'Hallertau',
            "timestamp": Date.now(),
            "updated": Date.now()
        });
        
        data.label="";
        data.vol="";
        $scope.modal.hide();
    };
    
    //FILL KEG FUNCTION
    $scope.fill = function(keg){
        
        
        var beerName = $scope.selectedBeer;
        
        if(beerName == null){
            alert("No beer selected");
        $ionicListDelegate.closeOptionButtons();
        }
        else{
        keg.contents = $scope.selectedBeer;
        keg.updated = Date.now();
        $scope.kegs.$save(keg);   
        $ionicListDelegate.closeOptionButtons();
        }
    };
    
    
    //RETURN KEG FUNCTION
    $scope.return = function(keg){
        keg.location = "Hallertau";
        keg.contents = "Empty";
        keg.updated = Date.now();
        $scope.kegs.$save(keg); 
        $ionicListDelegate.closeOptionButtons();
        
    };
    
    //MODAL
    $ionicModal.fromTemplateUrl('templates/modal.html', function($ionicModal) {
    $scope.modal = $ionicModal;
    },
    
                                {
    scope: $scope,
    animation: 'slide-in-up'
  
    });
  
    $scope.openModal=function(label){
        $scope.modal.show();
    };
    
   // SEND POPOVER
  
    $scope.openSendPopover = function($event) {    
    $ionicPopover.fromTemplateUrl('send-popover.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  
    $scope.popover.show($event);
  });
  $scope.closePopover = function() {
    $scope.popover.hide();
  };
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });
  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });
    };
    

    
    // FILL POPOVER
  
    $scope.openFillPopover = function($event) {    
    $ionicPopover.fromTemplateUrl('fill-popover.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  
    $scope.popover.show($event);
  });
  $scope.closePopover = function() {
    $scope.popover.hide();
  };
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });
  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });
    };
    

    
    //SEND KEG FUNCTION
    $scope.send = function(keg){
        
        var customerName = $scope.selectedName;
        
        if(customerName == null){
            alert("No customer selected");
            $ionicListDelegate.closeOptionButtons();
        }
      else{
        keg.location = $scope.selectedName;
        keg.updated = Date.now();
        $scope.kegs.$save(keg); 
        $ionicListDelegate.closeOptionButtons(); 
      }
    };
    
    //DEFINE RECEIVING CUSTOMER
    $scope.sendCustomer = function(name){
        $scope.selectedName = name;
        $scope.popover.hide();
    };
    
    //DEFINE FILL BEER
    $scope.fillBeer = function(name){
        $scope.selectedBeer = name;
        $scope.popover.hide();
    };
    
    //CUSTOMER NOT IN SEND LIST
    $scope.newCustomer = function(){
        $state.go('mainMenu.customers');
        $scope.popover.hide();
    }
    
    //BEER NOT IN SEND LIST
    $scope.newBeer = function(){
        $state.go('mainMenu.beers');
        $scope.popover.hide();
    }
    
})
   
.controller('beersCtrl', function($scope, $ionicModal, Beers, Users) {
    
    
    //DEFINE BEERS ARRAY
    $scope.beers = Beers;
    $scope.user = Users.ref().getAuth();
        
     //NEW BEER MODAL
    $ionicModal.fromTemplateUrl('templates/modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal){
            $scope.modal = modal;
            });
  
    $scope.openModal=function(){
        $scope.modal.show();
    };
    
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function () {
    $scope.modal.remove();
    });
        
    //ADD BEER FUNCTION
    $scope.addBeer = function(data) {
        $scope.beers.$add({
            "by": $scope.user.password.email,
            "name": data.name,
            "style": data.style,
            "abv": data.abv,
            "timestamp": Date.now(),
            "updated": Date.now()
        });
        
        data.name="";
        data.style="";
        data.abv="";
        $scope.modal.hide();
    };
    
})
   
.controller('customersCtrl', function($scope, $ionicModal, Customers, Users) {
    
    //DEFINE BEERS ARRAY
    $scope.customers = Customers;
    $scope.user = Users.ref().getAuth();
        
     //NEW CUSTOMER MODAL
    $ionicModal.fromTemplateUrl('templates/modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal){
            $scope.modal = modal;
            });
  
    $scope.openModal=function(){
        $scope.modal.show();
    };
    
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function () {
    $scope.modal.remove();
    });
        
    //ADD BEER FUNCTION
    $scope.addCustomer = function(data) {
        $scope.customers.$add({
            "by": $scope.user.password.email,
            "name": data.name,
            "address": data.address,
            "contactPerson": data.contactPerson,
            "contactNumber": data.contactNumber,
            "timestamp": Date.now(),
            "updated": Date.now()
        });
        
        data.name="";
        data.address="";
        data.contactPerson="";
        data.contactNumber="";
        $scope.modal.hide();
    };

})
      
.controller('LoginCtrl', function($scope, $state, $firebaseAuth, Users) {
    
    $scope.user = Users.ref().getAuth();

   $scope.login = function(data) {
       
        Users.ref().authWithPassword({
        email    : data.email,
        password : data.password
}, function(error, authData) {
  if (error) {
        alert("Incorrect user or password");
      console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
    $scope.user = Users.ref().getAuth(); 
    $state.go('mainMenu.mashTun');
    $scope.$apply()
  }
});  
       
       
};

        
    
})
   
.controller('mashTunSignupCtrl', function($scope) {

})
 
.controller('accountCtrl', function($scope,$state, Users) {
    
    $scope.logout=function(){
    Users.ref().unauth();
    $state.go('login');
    }
     

})
 