<template>
  <div class="subscription" :style="`background: ${color}`">
    <h1>{{title}}</h1>

    <div class="details">
      <span>${{price}}</span>
      <span class="delete">X</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Subscription",
  props: {
    title: String,
    price: Number,
    color: String
  }
};
</script>

<style scoped>
.subscription {
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  border-radius: 10px;
  padding: 0 16px;
}

.details {
  align-self: center;
  font-size: 1.2em;
  font-weight: bold;
}

.delete {
  margin-left: 8px;
}
</style>


