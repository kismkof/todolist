import Vue from 'vue';
import Vuex from 'vuex';
import Constant from '../Constant';

Vue.use(Vuex);

const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state: {
        todoitem: { no: "", todo: "", desc: "", done: false },
        todolist: [
            { "no": 4, "todo": "야구장", "desc": "프로야구 경기도 봐야합니다.", "done": false },
            { "no": 3, "todo": "놀기", "desc": "노는 것도 중요합니다.", "done": true },
            { "no": 2, "todo": "Vue 학습", "desc": "Vue 학습을 해야 합니다", "done": false },
            { "no": 1, "todo": "ES6 공부", "desc": "ES6공부를 해야 합니다", "done": false }
        ]
    },
    mutations: {
        [Constant.ADD_TODO]: (state, payload) => {
            console.log(Constant.ADD_TODO, payload)
            state.todolist.push({...payload.todoitem, no: new Date().getTime(), done: false });
            state.todoitem = { no: "", todo: "", desc: "", done: false };
        },
        [Constant.DELETE_TODO]: (state, payload) => {
            let index = state.todolist.findIndex((item) => item.no === payload.no);
            state.todolist.splice(index, 1);
        },
        [Constant.TOGGLE_DONE]: (state, payload) => {
            let index = state.todolist.findIndex((item) => item.no === payload.no);
            state.todolist[index].done = !state.todolist[index].done;
        },
        [Constant.UPDATE_TODO]: (state, payload) => {
            let index = state.todolist.findIndex((item) => item.no === payload.todoitem.no);
            Vue.set(state.todolist, index, payload.todoitem);
        },
        [Constant.INITIALIZE_TODOITEM]: (state, payload) => {
            if (payload && payload.todoitem) {
                state.todoitem = payload.todoitem;
            } else {
                state.todoitem = { no: "", todo: "", desc: "", done: false };
            }
        },
    },
    actions: {
        [Constant.ADD_TODO]: (store, payload) => {
            console.log(Constant.ADD_TODO, payload)
            store.commit(Constant.ADD_TODO, payload);
        },
        [Constant.DELETE_TODO]: (store, payload) => {
            store.commit(Constant.DELETE_TODO, payload);
        },
        [Constant.TOGGLE_DONE]: (store, payload) => {
            store.commit(Constant.TOGGLE_DONE, payload);
        },
        [Constant.UPDATE_TODO]: (store, payload) => {
            store.commit(Constant.UPDATE_TODO, payload);
        },
        [Constant.INITIALIZE_TODOITEM]: (store, payload) => {
            store.commit(Constant.INITIALIZE_TODOITEM, payload);
        }
    }
})

export default store;