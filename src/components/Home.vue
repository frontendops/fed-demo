<template>
  <div>
    <div class="home">
      <SubscriptionList/>
    </div>
    <router-link to="/addservice">
      <AddService/>
    </router-link>
  </div>
</template>

<script>
import SubscriptionList from "./SubscriptionList";
import AddService from "./AddService";
export default {
  components: {
    SubscriptionList,
    AddService
  },
  name: "Home",
  props: {
    msg: String
  }
};
</script>

<style scoped>
.home {
  background-color: #eeeeee;
}
</style>
