
import { createStore } from 'vuex';
import axios from 'axios'

export default createStore({
    state: {
        users: [],
        selectedUser: [],
    },
    mutations: {
        SET_USERS(state,users) {
            state.users = users;
        },
        SET_SELECTED_USER(state, user) {
            state.selectedUser = user;
        },
    },
    actions: {
        async fetchUsers({commit}) {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            commit ("SET_USERS",response.data);
        },

        async fetchUserById({ commit }, id){
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            commit ("SET_SELECTED_USER", response.data); 
        },

        async addUser({ commit }, user){
            const response = await axios.post('https://jsonplaceholder.typicode.com',user);
            commit ("SET_SELECTED_USER", response.data); 
            console.log(response.data)
        }
    },
});