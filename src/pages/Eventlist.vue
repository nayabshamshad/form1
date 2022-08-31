<template>
    <div class="container">
      <div class="eventlist">
    <span>Event List</span>
     <span><button type="button" class="btn">Add Event</button></span>
  </div>
        <table class="table">
          <thead class="thead">
            <tr>
              <th>Event Name</th>
              <th>Date</th>
              <th>View detail</th>
            </tr>
          </thead>
          <tbody class="tbody">
            <tr>
              <td>code sync</td>
              <td>02/08/2022</td>
          <td><button>btn</button></td>
            </tr>
            <tr>
              <td>code sync</td>
              <td>02/08/2022</td>
              <td><button>btn</button></td>
            </tr>
          </tbody>
        </table>
    </div>
  </template>
  <script>
  export default {
    name: "EventlistView",
    components: {},
  };
  </script>