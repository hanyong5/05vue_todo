<template>
  <todoheader></todoheader>
  <todoinput @addTodo="addTodo"/>
  <todolist :todoItems="todoItems" @removeTodo="removeTodo"/>
  <todofooter @clearTodo="clearTodo"/>

</template>

<script>
import todoheader from './components/todoheader.vue'
import todoinput from './components/todoinput.vue'
import todolist from './components/todolist.vue'
import todofooter from './components/todofooter.vue'

export default {
  name:'app',
  components:{
    todoheader,todoinput,todolist,todofooter
  },
  data(){
    return{
      todoItems:[]
    }
  },
  created(){
    // this.todoItems.push('안녕하세요!!!');
    // this.todoItems.push('반갑습니다.');

    for(let i=0;i<localStorage.length;i++){
      if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
        this.todoItems.push(localStorage.key(i));
      }
    }
  },
  methods:{
    clearTodo(){
      localStorage.clear();
      this.todoItems=[]
    },
    addTodo(todoItem){
      localStorage.setItem(todoItem,todoItem)
      this.todoItems.push(todoItem)
    },
    removeTodo(todoItem,index){
      localStorage.removeItem(todoItem)
      this.todoItems.splice(index,1)
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
body{font-family: 'Roboto', sans-serif;background:#f6f6f8;text-align:center}

*{margin:0;padding:0}
a:link,a:visited{text-decoration: none;color:#333}
.clearfix:after{content:"";display: block;clear:both;}
li{list-style:none}

#app{padding:0 20px}

input{border-style:groove;width:70%}
botton{
  border-style:groove
}
.shadow{
  box-shadow:5px 10px 10px rgba(0,0,0,0.03)
}

</style>