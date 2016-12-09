// Definimos el Array que contendrá los elementos de nuestra lista de cosas por hacer
function TodoCtrl($scope) {
  
  // se le añaden elementos a la funcion de $scope,  build an app son caracteristica de la aplicacion para el tipo de platafomar donde se podra ejecutar
    $scope.todos = [
    {text:'Learn AngularJS', done:false},         
    {text: 'Build an app', done:false}
  ];
  // Creamos una función que se encargará de agregar elementos a la lista
  $scope.getTotalTodos = function () {
    return $scope.todos.length;
  };
  
  // Un push como cualquier otro en JS en donde $scope.todo es el input del formulario
  $scope.addTodo = function () {
    $scope.todos.push({text:$scope.formTodoText, done:false});
    $scope.formTodoText = '';
  };
  // $scope agrega la funcion de todo los elementos que estaran en app
    $scope.clearCompleted = function () {
        $scope.todos = _.filter($scope.todos, function(todo){
            return !todo.done;
        });
    };
}