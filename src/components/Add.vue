<template>
  <div class="create">
    <div class="c-form">
      <div class="c-title">
        <span class="e">e</span>-finder 👜
        <div class="e-subtitle">Add a job</div>
      </div>
      <div class="c-label">Job Name</div>
      <div class="c-i-wrapper">
        <input
          v-model="name"
          class="c-input"
          placeholder="Someone"
          type="text"
        />
      </div>
      <div class="c-label">Job Description</div>
      <div class="c-i-wrapper">
        <textarea
          v-model="description"
          class="c-input"
          cols="30"
          rows="5"
        ></textarea>
      </div>

      <div class="c-label">Job Status</div>
      <select v-model="status" class="select">
        <option value="part-time">part-time</option>
        <option value="full-time">full-time</option>
      </select>

      <button @click="add" class="c-btn">Continue</button>

      <button @click="dash" class="c-login-btn">Back</button>
    </div>
  </div>
</template>

<script>
import store from "../store";
import axios from 'axios'
import url from '../store/url'

export default {
  data() {
    return {
      name: "",
      description: "",
      status: "",
    };
  },

  async create() {
    const token = await localStorage.getItem("token");

    if (token.length == 0) {
      this.$router.push({ name: "Home" });
    }
  },

  methods: {
    part(partTime) {
      if (partTime == true) {
        return "ppt blue";
      } else {
        return "ppt grey";
      }
    },

    async add() {
      if (!this.status) {
        this.status = "full-time";
      }

      const stuff = {
        name: this.name,
        message: this.description,
        status: this.status,
      };

      axios
        .post(`${url}/addJob`, stuff)
        .catch((e) => {
          console.log(e);
        });

      await store.dispatch("getJobs");

      alert("Job has been added successfully");
    },

    full(fullTime) {
      if (fullTime == true) {
        return "ppt blue";
      } else {
        return "ppt grey";
      }
    },

    dash() {
      this.$router.push({ name: "Dashboard" });
    },
  },
};
</script>

<style>
@import "../styles/add.css";
@import "../styles/create.css";
</style>