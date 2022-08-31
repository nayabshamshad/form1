<template>
  <div class="container">
    <form class="form">
      <h2>Step 2</h2>
      <div class="cate-list">
        <label for="club"><b>Club:</b></label>
        <input type="text" v-model="clubInput" placeholder="Club" name="Club" />
      </div>
      <div class="cate-list">
        <label for="date"><b>Date of Birth:</b></label>
        <input type="date" id="date" name="date" />
      </div>
      <div class="cate-list">
        <label for="tags"><b>Tags:</b></label>
        <input type="text" v-model="tagsInput" placeholder="Tags" name="tags" />
      </div>
      <div class="cate-list">
        <label for="status"><b>Status:</b></label> &nbsp; &nbsp;
        <input type="radio" name="status" value="active" /> Active
        <input type="radio" name="status" value="deactive" />Inactive
      </div>
      <div class="cate-list">
        <label for="telephone no."><b>Telephone No.</b></label>
        <input
          type="text"
          v-model="emailInput"
          placeholder="+92......."
          name="phone number"
        />
      </div>
      <div class="cate-list">
        <label for="state"><b>State:</b></label>
        <input
          type="text"
          v-model="stateInput"
          placeholder="State"
          name="State"
        />
      </div>
      <div class="cate-list">
        <label for="Region"><b>Region:</b></label>
        <input
          type="text"
          v-model="regionInput"
          placeholder="Region"
          name="region"
        />
      </div>
      <div class="cate-list">
        <label for="Gender"><b>Gender:</b></label> &nbsp;
        <input type="radio" name="gender" value="male" /> Male
        <input type="radio" name="gender" value="female" /> Female
      </div>
      <div class="cate-list">
        <label for="Etnic"><b>Etnic:</b></label>
        <select>
          <option value="Etnic">Etnic</option>
          <option value="a">a</option>
          <option value="b">b</option>
        </select>
      </div>
      <div class="cate-list">
        <label for="Category"><b>Category:</b></label>
        <select>
          <option value="Category">Category</option>
          <option value="a">a</option>
          <option value="b">b</option>
          <option value="c">c</option>
        </select>
      </div>
      <div class="cate-list">
        <label for="Size"><b>Size:</b></label>
        <select class="select">
          <option value="Size">Size</option>
          <option value="Xsmall">Xsmall</option>
          <option value="small">Small</option>
          <option value="Large">Large</option>
          <option value="XLarge">XLarge</option>
          <option value="XXLarge">XXLarge</option>
          <option value="XXXLarge">XXXLarge</option>
        </select>
      </div>
      <div class="cate-list">
        <label for="Instructor"><b>Instructor:</b></label>
        <input
          type="text"
          v-model="yearInput"
          placeholder="Instructor"
          name="Instructor"
        />
      </div>
      <div class="cate-list">
        <label for="Ghid"><b>Ghid:</b></label>
        <input type="text" v-model="yearInput" placeholder="Ghid" name="Ghid" />
      </div>
      <div class="cate-list">
        <label for="Master Ghid"><b>Master Ghid:</b></label>
        <input
          type="text"
          v-model="yearInput"
          placeholder="Master Ghid"
          name="Master Ghid"
        />
      </div>
      <div class="cate-list">
        <label for="list"><b>List:</b></label>
        <input type="text" v-model="Input" placeholder="wasiq" name="wasiq" />
        <button class="btn">+</button></div>

        <button type="button" class="signupbtn">Submit</button>

    </form>
  </div>
</template>
<script>
export default {
  name: "CategoryListView",
  components: {},
};
</script>
