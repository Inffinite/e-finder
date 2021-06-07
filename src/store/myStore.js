import axios from 'axios'
import url from './url'

export default {
    state: {
        user: '',
        jobs: ''
    },

    getters: {
        getJobs(state){
            return state.jobs
        },

        getUser(state){
            return state.user
        }
    },

    mutations: {
        SET_JOBS(state, jobs){
            state.jobs = jobs
        },

        SET_USER(state, user){
            state.user = user
        }
    },

    actions: {
        addJob({ commit }, jobs){
            commit('SET_JOBS', jobs)
        },

        getJobs({commit}){
            axios.get(`${url}/jobs`)
            .then((res) => {
                commit('SET_JOBS', res.data)
            })
            .catch((e) => {
                console.log(e)
            })
        },

        signIn({commit}, user){
            axios.post(`${url}/users`, {
                name: user.name,
                email: user.email,
                password: user.password
            })
            .then((res) => {
                localStorage.setItem('token', res.data.token)
                commit('SET_USER', res.data.user)
            })
            .catch((e) => {
                console.log(e)
            })
        },

        login({commit}, user){
            axios.post(`${url}/users/login`, {
                name: user.name,
                password: user.password
            })
            .then((res) => {
                localStorage.setItem('token', res.data.token)
                commit('SET_USER', res.data.user)
            })
            .catch((e) => {
                console.log(e)
            })
        },
    }
}