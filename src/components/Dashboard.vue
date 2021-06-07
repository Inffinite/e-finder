<template>
  <div class="dash">
    <div class="d-header">
      <div class="d-brand">e-finder</div>
      <div class="d-end">
          <svg @click="logout" class="d-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"/></svg>
      </div>
    </div>

    <div class="add-wrapper">
        <button @click="add" class="add-job">
            Add job
        </button>
    
    </div>

    <div class="d-items">
      <div @click="jobb" v-for="(job, i) in jobs" :key="i" class="d-item">
        <div class="d-time">{{ job.time }}</div>
        <div class="d-title">
          {{ job.name }}
          <div class="d-subtitle">
            {{ job.message }}
          </div>
        </div>
        <div v-if="job.status == 'part-time'" class="d-duration">{{ job.status }}</div>
        <div v-if="job.status == 'full-time'" class="duration-green">
            {{ job.status }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store'

export default {
    data(){
        return {
        }
    },

    async created(){
        
        store.dispatch('getJobs')
        
    },

    computed: {
        jobs: () => {
            return store.getters.getJobs
        }
    },

    methods: {
        add(){
            this.$router.push({ name: 'Add' })
        },

        jobb(){
            alert('The employer will reach out')
        },

        async logout(){
            await localStorage.removeItem('token')
            this.$router.push({ name: 'Home' })
        }
    }
};
</script>

<style>
@import "../styles/dashboard.css";
</style>