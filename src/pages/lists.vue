<template>
  <div class="container">
    <h2>{{ $t('pendingTeamLeaders') }}</h2>
      <table class="table">
        <thead class="thead">
          <tr>
            <th>{{ $t('teamName') }}</th>
            <th>{{ $t('teamLeader') }}</th>
            <th>{{ $t('status') }}</th>
            <th>{{ $t('aprrovedecline') }}</th>
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
