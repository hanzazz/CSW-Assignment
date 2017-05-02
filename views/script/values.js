  var myApp = angular.module('FamApp', ['ngResource']);
  myApp.controller('MainController', function($scope,$resource) {

  $scope.showstudent = function(){
    swal({
  title: 'StudentID',
  input: 'text',
  showCancelButton: true,
  inputValidator: function (value) {
    return new Promise(function (resolve, reject) {
      if (value) {
        resolve()
      } else {
        reject('You need to write something!')
      }
    })
  }
}).then(function (sstudent) {
  swal({
    type: 'success',
    html: 'You entered: ' + sstudent
  })
  document.getElementById('estudent').value = sstudent;
  $scope.project.StudentID = sstudent;
  console.log($scope.project.StudentID);

})
  }

  $scope.editstudent = function(){
    swal({
  title: 'Edit StudentID',
  input: 'text',
  showCancelButton: true,
  inputValidator: function (value) {
    return new Promise(function (resolve, reject) {
      if (value) {
        resolve()
      } else {
        reject('You need to write something!')
      }
    })
  }
}).then(function (sstudent) {
  swal({
    type: 'success',
    html: 'You entered: ' + sstudent
  })
  document.getElementById('lstudent').value = sstudent;
  $scope.Editproject.StudentID = sstudent;
  console.log($scope.Editproject.StudentID);

})
  }

 $scope.showname = function(){
    swal({
  title: 'Name',
  input: 'text',
  showCancelButton: true,
  inputValidator: function (value) {
    return new Promise(function (resolve, reject) {
      if (value) {
        resolve()
      } else {
        reject('You need to write something!')
      }
    })
  }
}).then(function (sname) {
  swal({
    type: 'success',
    html: 'You entered: ' + sname
  })
  document.getElementById('ename').value = sname;
  $scope.project.Name = sname;
  console.log($scope.project.Name);

})
  }

  $scope.editname = function(){
    swal({
  title: 'Edit Name',
  input: 'text',
  showCancelButton: true,
  inputValidator: function (value) {
    return new Promise(function (resolve, reject) {
      if (value) {
        resolve()
      } else {
        reject('You need to write something!')
      }
    })
  }
}).then(function (sname) {
  swal({
    type: 'success',
    html: 'You entered: ' + sname
  })
  document.getElementById('lname').value = sname;
  $scope.Editproject.Name = sname;
  console.log($scope.Editproject.Name);

})
  }

  $scope.showroom = function(){
    swal({
  title: 'Room',
  input: 'text',
  showCancelButton: true,
  inputValidator: function (value) {
    return new Promise(function (resolve, reject) {
      if (value) {
        resolve()
      } else {
        reject('You need to write something!')
      }
    })
  }
}).then(function (sroom) {
  swal({
    type: 'success',
    html: 'You entered: ' + sroom
  })
  document.getElementById('eroom').value = sroom;
        $scope.project.Room = sroom;
  //console.log($scope.project.Room);

})
  }

  $scope.editroom = function(){
    swal({
  title: 'Edit Room',
  input: 'text',
  showCancelButton: true,
  inputValidator: function (value) {
    return new Promise(function (resolve, reject) {
      if (value) {
        resolve()
      } else {
        reject('You need to write something!')
      }
    })
  }
}).then(function (sroom) {
  swal({
    type: 'success',
    html: 'You entered: ' + sroom
  })
  document.getElementById('lroom').value = sroom;
        $scope.Editproject.Room = sroom;
  //console.log($scope.project.Room);

})
  }

$scope.showdate = $(function() {
    $('input[name="daterange"]').daterangepicker(
    {
        timePicker: true,
        timePickerIncrement: 30,
        locale: {
          format: 'DD-MM-YYYY h:mm A' 
        },
        startDate: '01-01-2017',
        endDate: '01-01-2018'
    }, 
    function(start, end, label) {
        swal("Start-End Date/Time: " + start.format('DD-MM-YYYY h:mm A') + ' to ' + end.format('DD-MM-YYYY h:mm A')); 
        $scope.project.Date = start.format('DD-MM-YYYY h:mm A') + ' to ' + end.format('DD-MM-YYYY h:mm A');
        $scope.Editproject.Date = start.format('DD-MM-YYYY h:mm A') + ' to ' + end.format('DD-MM-YYYY h:mm A');
    }); 
})


$scope.showteacher = function(){
    swal({
  title: 'Teacher',
  input: 'text',
  showCancelButton: true,
  inputValidator: function (value) {
    return new Promise(function (resolve, reject) {
      if (value) {
        resolve()
      } else {
        reject('You need to write something!')
      }
    })
  }
}).then(function (steacher) {
  swal({
    type: 'success',
    html: 'You entered: ' + steacher
  })
  document.getElementById('eteacher').value = steacher;
        $scope.project.Teacher = steacher;

})
  }

  $scope.editteacher = function(){
    swal({
  title: 'Edit Teacher',
  input: 'text',
  showCancelButton: true,
  inputValidator: function (value) {
    return new Promise(function (resolve, reject) {
      if (value) {
        resolve()
      } else {
        reject('You need to write something!')
      }
    })
  }
}).then(function (steacher) {
  swal({
    type: 'success',
    html: 'You entered: ' + steacher
  })
  document.getElementById('lteacher').value = steacher;
        $scope.Editproject.Teacher = steacher;

})
  }

  $scope.showdetails = function(){
    swal({
  title: 'Details',
  input: 'textarea',
  showCancelButton: true,
  inputValidator: function (value) {
    return new Promise(function (resolve, reject) {
      if (value) {
        resolve()
      } else {
        reject('You need to write something!')
      }
    })
  }
}).then(function (sdetails) {
  swal({
    type: 'success',
    html: 'You entered: ' + sdetails
  })
  document.getElementById('edetails').value = sdetails;
        $scope.project.Details = sdetails;

})
  }

   $scope.editdetails = function(){
    swal({
  title: 'Edit Details',
  input: 'textarea',
  showCancelButton: true,
  inputValidator: function (value) {
    return new Promise(function (resolve, reject) {
      if (value) {
        resolve()
      } else {
        reject('You need to write something!')
      }
    })
  }
}).then(function (sdetails) {
  swal({
    type: 'success',
    html: 'You entered: ' + sdetails
  })
  document.getElementById('ldetails').value = sdetails;
        $scope.Editproject.Details = sdetails;

})
  }

    var Project = $resource('/api/projects/:project_id',{'project_id' : '@id'},
    {
      'delete' : { 'method' :'delete' },
      update : { method : 'PUT'}
    })

    $scope.projects = Project.query()  // reload data
    $scope.Editproject = {}

    var dstudent;
    dstudent = document.getElementById('estudent').value;

    $scope.add = function(){
      var input1 = document.getElementById('estudent').value;
      var input2 = document.getElementById('ename').value;
      var input3 = document.getElementById('eroom').value;
      var input4 = document.getElementById('edate').value;
      var input5 = document.getElementById('eteacher').value;
      var input6 = document.getElementById('edetails').value;
      if(input1 == ''){
        swal(
          'Warning !',
          'Check your input StudentID !',
          'warning'
        )
      }
      else if(input2 == ''){
        swal(
          'Warning !',
          'Check your input Name !',
          'warning'
        )}
        else if(input3 == ''){
        swal(
          'Warning !',
          'Check your input Room !',
          'warning'
        )}
        else if(input4 == '01-01-2017 12:00 AM - 01-01-2018 12:00 AM'){
        swal(
          'Warning !',
          'Check your input Date/Time !',
          'warning'
        )}
        else if(input5 == ''){
        swal(
          'Warning !',
          'Check your input Teacher !',
          'warning'
        )}
        else if(input6 == ''){
        swal(
          'Warning !',
          'Check your input Details !',
          'warning'
        )}
      else{
        swal(
          'Good job!',
          'You clicked the button!',
          'success'
        )
      Project.save({
        StudentID : $scope.project.StudentID,
        Name: $scope.project.Name,
        Room : $scope.project.Room,
        Date : $scope.project.Date,
        Teacher : $scope.project.Teacher,
        Details : $scope.project.Details
      })
      $scope.projects = Project.query()
        }
      }


    $scope.delete = function(id){
      swal({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  type: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then(function () {
  swal(
    'Deleted!',
    'Your file has been deleted.',
    'error'
  )
  Project.delete({'project_id' : id})
      $scope.projects = Project.query()
})
      // Project.delete({'project_id' : id})
      // $scope.projects = Project.query()
    }

    $scope.isEmpty = function(item){
      return Object.keys(item).length == 1
    }

    $scope.edit = function(id){
       Project.get({ project_id: id },function(project){
            $scope.Editproject.id = project.id
            $scope.Editproject.StudentID = project.StudentID
            $scope.Editproject.Name = project.Name
            $scope.Editproject.Room = project.Room
            $scope.Editproject.Date = project.Date
            $scope.Editproject.Teacher = project.Teacher
            $scope.Editproject.Details = project.Details
       })

       $scope.editor = true
    }

    $scope.update = function(id){
      swal(
        'Edit Success!',
        'You clicked the button!',
        'success'
      )
      Project.update({ project_id: id },
      {
        StudentID : $scope.Editproject.StudentID,
        Name: $scope.Editproject.Name,
        Room : $scope.Editproject.Room,
        Date : $scope.Editproject.Date,
        Teacher : $scope.Editproject.Teacher,
        Details : $scope.Editproject.Details
      })
      $scope.projects = Project.query()
    }
  });