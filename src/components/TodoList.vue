<template>
<div class="container">
    <div class="well">
        <div class="title">
            :: Todolist App
        </div>
    </div>
    <button class="btn btn-primary" @click="goAddTodo">할일 추가</button>
    <div class="panel panel-default panel-borderless">
    <div class="panel-body">
        <div class="row">
            <ul class="list-group">
                <TodoItem v-for="todoitem in state.todolist" :key="todoitem.no" :todoitem="todoitem" />
            </ul>
        </div>
    </div>
    </div>
</div>
</template>

<script>
import Constant from '../Constant';
import TodoItem from './TodoItem';
import { reactive, computed } from '@vue/composition-api'

export default {
    components : { TodoItem },
    setup(props, context) {
        const store = context.root.$store;
        const router = context.root.$router;

        const state = reactive({ 
            todolist : computed(()=>store.state.todolist ) 
        });

        const goAddTodo = () => {
            store.dispatch(Constant.INITIALIZE_TODOITEM);
            router.push({ name:"addTodo" });
        }

        return { state, goAddTodo }
    }
}
</script>

<style>

</style>