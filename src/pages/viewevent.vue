<template>
  <div class="container">
    <form class="form category-form">
      <div class="cate-list-home">
        <label for="club"><b>Name:</b></label>
        <span>{{ userData.name }}</span>
      </div>
      <div class="cate-list-home">
        <label for="club"><b>Club:</b></label>
        <span>{{ userData.clubName }}</span>
      </div>

      <div class="cate-list-home">
        <label for="date"><b>DoB:</b></label>
        <span>{{ userData?.dateOfBirth ? userData.dateOfBirth : "" }}</span>
      </div>
      <div class="cate-list-home">
        <label for="status"><b>Status:</b></label>
        <span>{{ userData.status ? "Active" : "InActive" }}</span>
      </div>
      <div class="cate-list-home chip-container">
        <label for="tags"><b>Tags:</b></label>
        <div v-if="userData.tagList">
          <span v-for="(item, index) in userData.tagList" :key="index">
            {{ item }}
          </span>
        </div>
      </div>
      <div class="cate-list-home">
        <label for="name"><b>Name:</b></label>
      </div>

      <div class="cate-list-home">
        <label for="date"><b>Date:</b></label>
      </div>
      <div class="cate-list-home">
        <label for="Description"><b>Description:</b></label>
      </div>
      <div class="cate-list-home">
        <label for="Listofstudents"><b>List of Students:</b></label>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "vieweventView",
  components: {},
};
</script>
