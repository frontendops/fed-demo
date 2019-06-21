<template>
  <div class="alt-subscription" :style="`background: ${color}`" @click="triggerAlert(e)">
    <h1>{{title}}</h1>

    <div class="alt-details">
      <div>${{price}}</div>
      <div>Due on 27 jul 2019</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AltSubscription",
  props: {
    title: String,
    price: Number,
    color: String,
    date: Date
  },
  methods: {
    triggerAlert(e) {
      //   can pass value as second arg, such as the clicked on item
      this.$emit("listen", e);
    }
  }
};
</script>

<style scoped>
.alt-subscription {
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  border-radius: 10px;
  padding: 0 16px;
}

.alt-details {
  text-align: left;
  align-self: center;
  font-size: 1.2em;
  font-weight: bold;
}

.delete {
  margin-left: 8px;
}
</style>



