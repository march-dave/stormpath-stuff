'use strict';

var app = angular.module('spApp');

app.controller('profileCtrl', function($scope, $user, $timeout) {

  console.log('$scope', $scope)

  $scope.loading = true;
  // $scope.user = USER;

  $user.get()
  .then(user => {
    console.log('user', user);
    $scope.user = user;

  })
  .catch(err => {
    console.log('err', err);
  })
  .finally(() => {
    $scope.loading = false;
  })

  $scope.edit = () => {
    $scope.editing = true;
    $scope.edituser = angular.copy($scope.user);
  }

  $scope.cancelEdit = () => {
    $scope.editing = fase;
    $scope.editing = null;
  }

  $scope.saveEdit = () => {

    $http.put('/users/me', $scope.editUser)
    .then(res=> {

        $user.get()
          .then(user => {
            $scope.user = res.data;
            $scope.cancelEdit();
          })
      // console.log('res'), res;
    })
    .catch(err => {
      console.log('err', err);
    })
  }
});
