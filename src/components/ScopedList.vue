<template>
  <!-- make this a scoped slot -->
  <div>
    <h1>{{ title }}</h1>
    <div class="total-price">
      <span>Your Items</span>
    </div>
    <!-- make this a slot and move this code up to the parent 🤗 -->
    <div role="list" class="scoped-list">
      <slot v-bind:items="subscriptions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScopedList",
  props: {
    ListItems: Array
  },
  data() {
    return {
      title: "Your subscriptions",
      subscriptions: [
        {
          name: "Netflix",
          price: 10,
          color: "#e31929"
        },
        {
          name: "Spotify",
          price: 10,
          color: "#028858"
        },
        {
          name: "Medium",
          price: 5,
          color: "#024c8e"
        },
        {
          name: "Headspace",
          price: 12,
          color: "#f9af2f"
        },
        {
          name: "Amazon Prime",
          price: 12,
          color: "#f9af2f"
        }
      ]
    };
  }
};
</script>

<style lang="css">
.scoped-list {
  margin: 0 auto;
  margin-top: 16px;
  max-width: 900px;
  padding: 0 8px;
}

.total-price {
  display: flex;
  font-size: 2rem;
  max-width: 900px;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 8px;
}

.total-price__total {
  font-weight: bold;
}

.lines {
  border-bottom: 2px dotted black;
  flex-grow: 1;
}
</style>


