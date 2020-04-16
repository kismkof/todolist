<template>
<div class="centered-modal fade in" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="cancel"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">할일 추가</h4>
      </div>
      <div class="modal-body">
        할일 : 
        <input id="msg" type="text" class="form-control" name="msg" 
            placeholder="할일을 여기에 입력!" v-model="state.todoitemlocal.todo"><br/>
        설명 : 
        <textarea class="form-control" rows="3" v-model="state.todoitemlocal.desc"></textarea>  
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" @click="addTodo">추 가</button>
        <button type="button" class="btn btn-primary" data-dismiss="modal" @click="cancel">취 소</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Constant from '../Constant';
import { reactive, computed } from '@vue/composition-api'

export default {
    setup(props, context) {
        const store = context.root.$store;
        const router = context.root.$router;

        const state = reactive({ 
            todoitemlocal : computed(()=>({ ...store.state.todoitem })) 
        });

        const addTodo = () => {
          console.log(Constant.ADD_TODO)
            store.dispatch(Constant.ADD_TODO, { todoitem : state.todoitemlocal })
            router.push({ name:"todoList" });
        }
        const cancel = () => {
            router.push({ name:"todoList"});
        }

        return { state, addTodo, cancel }
    }
}
</script>

<style>

</style>