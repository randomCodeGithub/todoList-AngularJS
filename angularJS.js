let skillList = angular.module("skillListApp", []);

var model = {
  user: "Artur",
  skills: [
    { name: "HTML", studied: true },
    { name: "CSS", studied: true },
    { name: "JavaScript", studied: true },
    { name: "AngularJS", studied: false },
  ],
};

skillList.controller("skillListCtrl", function ($scope) {
  $scope.data = model;

  $scope.skillName = '';

  // Обработчик нажатия по кнопке
  $scope.addNewSkill = function () {
    if ($scope.skillName.trim()) {
      $scope.data.skills.push({
        name: $scope.skillName,
        studied: false,
      });
    } else {
      alert("Input field can`t be empty!");
    }

    $scope.skillName = "";
  };

  $scope.showText = function (studied) {
    return studied ? "Yes" : "No";
  };

  $scope.setStyle = function (studied) {
    return studied ? "color:green" : "color:red; font-weight: bold";
  };
});
