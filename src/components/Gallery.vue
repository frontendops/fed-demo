<template>
  <div role="list" class="gallery">
    <div
      class="gallery-item"
      role="list-item"
      v-for="item in items"
      :style="`background: ${item.color}`"
      :key="item.name"
    >
      <div>{{item.name}}</div>
      <div>${{item.price}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  props: {
    items: Array
  }
};
</script>

<style scoped>
.gallery {
  margin: 0 auto;
  max-width: 1200px;
  padding: 16px;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 2rem;
  font-weight: bold;
  color: white;
}

.gallery-item {
  height: 250px;
  width: 250px;
  padding: 8px;
  margin-right: 16px;
}
</style>
