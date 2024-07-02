var app = new Vue({
    el: '.app',
    data:{
      todos:[],
      newTodo:''
    },
    methods:{
      addTodo: function(todo){
        this.todos.push({content:todo,completed: false})
      },
      removeTodo: function(todo){
        this.todos.splice(this.todos.indexOf(todo), 1);
      },
      allTodo:function(todo) {
        this.todos.forEach(todo => {
          todo.completed = true;
        });
      }
    }
  })