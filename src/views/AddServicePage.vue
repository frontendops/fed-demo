<template>
  <div class="addPage">
    <h1>Enter Subscription</h1>
    <form action="post" class="form">
      <label for="text">Name</label>
      <input type="text" placeholder="Name" id="text">
      <label for="price">Price</label>
      <input type="number" name="price" id="price" min="1" step="1">
      <label for="date">Next Payment</label>
      <input type="date" name="date" id="date">
      <!-- insert datepicker library -->

      <input type="submit">
    </form>
  </div>
</template>

<script>
export default {
  name: "AddServicePage"
};
</script>

<style scoped>
.addPage {
  text-align: center;
}

.form {
  display: flex;
  flex-direction: column;
  max-width: 792px;
  margin: 0 auto;
  text-align: left;
  font-weight: bold;
}

.form input {
  margin-top: 24px;
  float: left;
}
</style>