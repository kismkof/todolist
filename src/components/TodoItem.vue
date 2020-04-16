<template>
    <li :class="checked(todoitem.done)" :title="'설명 : ' + todoitem.desc" @click="toggleDone(todoitem.no)">
        <span :class="{ pointer:true, 'todo-done':todoitem.done }">
            {{todoitem.todo}}
            {{todoitem.done ? " (완료)" : ""}}
        </span>
        <span class="pull-right badge pointer" @click.stop="deleteTodo(todoitem.no)">삭제</span>
        <span class="pull-right badge pointer" @click.stop="editTodo(todoitem.no)">편집</span>
    </li>
</template>

<script>
import Constant from '../Constant';

export default {
    props: {
        todoitem: Object
    },
    setup(props, context) {
        const store = context.root.$store
        const router = context.root.$router;

        const checked = (done) => {
            return { "list-group-item":true, "list-group-item-success":done };
        }
        const toggleDone = (no) => {
            store.dispatch(Constant.TOGGLE_DONE, { no:no });
        }
        const deleteTodo = (no) => {
            store.dispatch(Constant.DELETE_TODO, { no:no });
        }
        const editTodo = (no) => {
            store.dispatch(Constant.INITIALIZE_TODOITEM, { todoitem: { ...props.todoitem } });
            router.push({ name: 'updateTodo', params: { no:no } })
        }

        return { toggleDone, deleteTodo, editTodo, checked }
    }
}
</script>

<style>

</style>