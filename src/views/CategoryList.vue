<template>
  <div class="container">
   
    <form class="form">
      <h2>Step 2</h2>
      <label for="Region"><b>Region:</b></label>
      <input type="text" v-model="regionInput" placeholder="Region" name="region" />
      <label for="state"><b>State:</b></label>
      <input type="text" v-model="stateInput" placeholder="State" name="State" />
      <label for="telephone no."><b>Telephone No.</b></label>
      <input type="text" v-model="emailInput" placeholder="+92......." name="phone number" />
      <label for="year"><b>Year:</b></label>
      <input type="text" v-model="yearInput" placeholder="Year" name="Year" />
      <label for="year"><b>Year:</b></label>
      <input type="text" v-model="yearInput" placeholder="Year" name="Year" />
      <label for="year"><b>Year:</b></label>
      <input type="text" v-model="yearInput" placeholder="Year" name="Year" />
      <label for="tags"><b>Tags:</b></label>
      <input type="text" v-model="tagsInput" placeholder="Tags" name="tags" />
      <label for="club"><b>Club:</b></label>
      <input type="text" v-model="clubInput" placeholder="Club" name="Club" />
      <label for="list"><b>List:</b></label> 
      <div class="input">
      <input type="text" v-model="Input" placeholder="wasiq" name="wasiq" />
      <button class="btn">+</button> </div> 
      <label for="Category"><b>Category:</b></label>
      <select>
          <option value="Category">Category</option>
          <option value="a">a</option>
          <option value="b">b</option>
          <option value="c">c</option>
        </select>
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
        <label for="date"><b>Date.</b></label> <br>
        <input type="date" id="date" name="date">
       <br> 
      <div class="radio">
        <label for="Etnic"><b>Etnic:</b></label> &nbsp; &nbsp; &nbsp;
        <input type="radio" name="gender" value="male"> A
        <input type="radio" name="gender" value="female"> B &nbsp; &nbsp;
      </div>
      <div class="radio"> <label for="Gender"><b>Gender:</b></label> &nbsp;
        <input type="radio" name="gender" value="male"> Male
        <input type="radio" name="gender" value="female"> Female
      </div>
      <div class="radio">
        <label for="status"><b>Status:</b></label> &nbsp; &nbsp;
        <input type="radio" name="status" value="active"> Active
        <input type="radio" name="status" value="deactive">Deactive
      </div>
      <div class="btn1">
        <button type="button" class="signupbtn">Submit</button>
      </div>
      
    
    </form>
  </div>
</template>
<script>
export default {
  name: "CategoryListView",
  components: {},
};
</script>