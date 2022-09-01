<template>
  <div class="container">
    <form class="form">
      <h2>Add Event</h2>
      <div>
        <label for="name"><b>Name:</b></label>
        <input
          v-model="Name"
          type="text"
          placeholder="Enter Name"
          name="name"
        />
      </div>
      <div class="cate-list">
        <label for="date"><b>Date:</b></label>
        <input type="date" id="date" name="date" />
      </div>
      <div class="cate-list">
        <label for="description"><b>Description:</b></label>
        <textarea
          v-model="Name"
          type="text"
          name="description"
          placeholder="Enter Description"
        ></textarea>
      </div>
      <div class="cate-list">
        <label for="img"><b>Select image:</b></label>
        <input type="file" id="img" name="img" accept="image/*" />
      </div>
      <div class="cate-list">
        <label for="listofstudent"><b>List of Student:</b></label>
        <select>
          <option value="List of Student">List of Student</option>
          <option value="a">amna</option>
          <option value="b">nimra</option>
          <option value="c">sana</option>
        </select>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "addeventView",
  components: {},
};
</script>
