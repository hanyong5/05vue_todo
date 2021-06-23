<template>
  <div class="inputBox shadow">
      <input type="text" v-model="newTodoItem" placeholder="글자를 입력하세요" 
        @keyup.enter="addTodo"
      >
      <button class="addContainer" @click="addTodo">
          <i class="addBtn fas fa-plus"></i>
      </button>
  </div>
  
  <modal v-if="modal" @click="modal=false">
      <template v-slot:header>경고</template>
      <template v-slot:footer  @click="modal=false">
          할 일을 입력하세요
          <i class="closeModalBtn fa fa-times"></i>
      </template>
  </modal>
  
</template>

<script>
import modal from './modal.vue'
export default {
    name:'input',
    data(){
        return{
            newTodoItem:'',
            modal:false,
        }
    },
    methods:{
        addTodo(){
            console.log(this.newTodoItem);
            if(this.newTodoItem !== ''){
                let value = this.newTodoItem && this.newTodoItem.trim();
                //localStorage.setItem(value,value);
                this.$emit('addTodo',value);
                this.clearInput();
            }else{
                this.modal = true;
            }

        },
        clearInput(){
            this.newTodoItem = '';
        }
    },
    components:{
        modal,
    }
}
</script>

<style scoped>
    input:focus{outline:none}
    .inputBox{
        background:#fff;
        line-height:50px;
        height:50px;
        border-radius:5px;
        margin-bottom:10px
    }
    .inputBox input{
        border-style:none;
        font-size:1rem
    }
    .addContainer{
        border-style:none;
        float:right;
        background:linear-gradient(to right,#6478fb,#8763fb);
        display: inline-block;
        width:3rem;height:50px;
        border-radius:0 5px 5px 0
        }
    .addBtn{
        color:white
    }
</style>