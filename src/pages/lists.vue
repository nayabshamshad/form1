<template>
  <div class="container">
    <h2>Pending Team Leaders</h2>
      <table class="table">
        <thead class="thead">
          <tr>
            <th>Team Name</th>
            <th>Team Leader</th>
            <th>Status</th>
            <th>Aprrove/decline</th>
          </tr>
        </thead>
        <tbody class="tbody">
          <tr>
            <td>code sync</td>
            <td>Wasiq</td>
            <td><button class="btn">Active</button></td>
            <td><button type="button" class="btn"><img src="../assets/tick.png" alt=""></button>
          <button type="button" class="btn"><img src="../assets/cross.png" alt=""></button></td>
          </tr>
          <tr>
            <td>code sync</td>
            <td>Wasiq</td>
            <td><button class="btn">Deactive</button></td>
            <td><button type="button" class="btn"><img src="../assets/tick.png" alt=""></button>
          <button type="button" class="btn"><img src="../assets/cross.png" alt=""></button></td>
          </tr>
        </tbody>
      </table>
  </div>
</template>
<script>
export default {
  name: "ListsView",
  components: {},
};
</script>
