(function () {
  'use strict';

  angular
    .module('core')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope', '$http','$element','NgTableParams',];
  function HomeController($scope,$http,$element,NgTableParams,) {
    var vm = this;
    var materialData = [];
    var displayData = [];
    vm.dbCount = 0;
    vm.search = {
      instagram:0,
      facebook:0,
      twitter:0,
      blog:0,
      youtube:0,
      pinterest:0
    }
    vm.cols = [
      { field: "selector", title: "", headerTemplateURL: "headerCheckbox.html", show: true },
      { field: "id", title: "ID", sortable:'id',show: true },
      { field: "name", title: "Name",sortable:'name', show: true },
      { field: "email", title: "Email", sortable:'email',show: true },
      { field: "instagram", title: "Instagram",sortable:'instagram', show: true },
      { field: "facebook", title: "Facebook",sortable:'facebook', show: true },
      { field: "twitter", title: "Twitter",sortable:'twitter', show: true },
      { field: "youtube", title: "Youtube",sortable:'youtube', show: true },
      { field: "pinterest", title: "Pinterest",sortable:'pinterest', show: true },
      { field: "blog", title: "Blog", sortable:'blog',show: true },
      { field: "location", title: "Location",sortable:'location', show: true },
    ];
    vm.checkboxes = {
      checked: false,
      items: {}
    };
    //Function
    vm.filterValue = filterValue;
    vm.insertDb = insertDb;


    function loadDB(){
    $http.get('/db')
      .success(function(data){
        materialData = data;
        displayData = materialData;
        vm.tableInfo = new NgTableParams({}, { dataset: displayData});
      });
    }
    loadDB();

    function filterValue(field){
      var FilterArray = [];
      angular.forEach(materialData, function(data){
         var keep = true;
         angular.forEach(data, function(value , key) {
            if (keep == true ){
              if (value < vm.search[key]){
                keep = false;
              }
            }
          })
          if(keep == true){
                FilterArray.push(data);
          }
      });
      vm.tableInfo = new NgTableParams({}, { dataset: FilterArray});
    }
    function insertDb(){
      $http.put('/db',{count:vm.dbCount})
        .success(function(data){
          alert(data);
          getDB();
        })
    }
       // watch for check all checkbox
    $scope.$watch(function() {
      return vm.checkboxes.checked;
    }, function(value) {
      console.log(value);
      angular.forEach(displayData, function(item) {
        vm.checkboxes.items[item.id] = value;
      });
    });
    
    // watch for data checkboxes
    $scope.$watch(function() {
      return vm.checkboxes.items;
    }, function(values) {
      console.log(values);
      var checked = 0, unchecked = 0,
          total = displayData.length;
      angular.forEach(displayData, function(item) {
        checked   +=  (vm.checkboxes.items[item.id]) || 0;
        unchecked += (!vm.checkboxes.items[item.id]) || 0;
      });
      if ((unchecked == 0) || (checked == 0)) {
        vm.checkboxes.checked = (checked == total && total > 1);
      }
      angular.element($element[0].getElementsByClassName("select-all")).prop("indeterminate", (checked != 0 && unchecked != 0));
    }, true);


}

}());
