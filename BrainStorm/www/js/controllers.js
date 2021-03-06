angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})
.controller('homeCtrl', function($scope, questionsFactory) {
  $scope.AllQuestions = questionsFactory.getAllQuestions();
})
.controller('QuestionCtrl', function($scope){

})
.controller('')
.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
}).controller



  // .state('singleQuestion', {
  //   url: '/question/:questionID',
  //   views: {
  //     'tab-question': {
  //       templateUrl: 'templates/singleQuestion.html',
  //       controller: 'QuestionCtrl'
  //     }
  //   }
  // })
  //   .state('scoreBoard', {
  //   url: '/scoreBoard',
  //   views: {
  //     'tab-scoreBoard': {
  //       templateUrl: 'templates/scoreBoard.html',
  //       controller: 'scoreBoardCtrl'
  //     }
  //   }
  // })
  //   .state('answer', {
  //   url: '/answer',
  //   views: {
  //     'tab-answer': {
  //       templateUrl: 'templates/submitAnswer.html',
  //       controller: 'answerCtrl'
  //     }
  //   }
  // });;



;
