<template>
  <div>
    <div class="home">
      <SubscriptionList/>

      <!-- <ScopedList>
        <template slot-scope="props">
          <Subscription
            v-for="(item, index) in props.items"
            :key="index"
            :title="item.name"
            :price="item.price"
            :color="item.color"
          />
        </template>
      </ScopedList>

      <ScopedList>
        <template slot-scope="props">
          <Gallery :items="props.items"/>
        </template>
      </ScopedList>-->

      <section>
        <!-- @click="val++" -->
        <button @click="val++">increase</button>
        <Test :num="val"/>

        <button @click="chosenComponent='DynamicComponent'">Switch</button>
        <button @click="chosenComponent='DynamicComponent2'">Switch</button>

        <component :is="chosenComponent"></component>
      </section>
    </div>
    <router-link to="/addservice">
      <AddService/>
    </router-link>
  </div>
</template>

<script>
import SubscriptionList from "./SubscriptionList";
import AddService from "./AddService";
import ScopedList from "./ScopedList";
import AltSubscription from "./AltSubscription";
import Gallery from "./Gallery";
import Subscription from "./Subscription";
import DynamicComponent from "./DynamicComponent";
import DynamicComponent2 from "./DynamicComponent2";
import Test from "./Test";

export default {
  components: {
    SubscriptionList,
    AddService,
    ScopedList,
    AltSubscription,
    Gallery,
    Subscription,
    DynamicComponent,
    DynamicComponent2,
    Test
  },
  name: "Home",
  data() {
    return {
      moviesList: [
        {
          albumId: 1,
          id: 1,
          title: "accusamus beatae ad facilis cum similique qui sunt",
          url: "https://via.placeholder.com/600/92c952",
          thumbnailUrl: "https://via.placeholder.com/150/92c952"
        },
        {
          albumId: 1,
          id: 2,
          title: "reprehenderit est deserunt velit ipsam",
          url: "https://via.placeholder.com/600/771796",
          thumbnailUrl: "https://via.placeholder.com/150/771796"
        },
        {
          albumId: 1,
          id: 3,
          title: "officia porro iure quia iusto qui ipsa ut modi",
          url: "https://via.placeholder.com/600/24f355",
          thumbnailUrl: "https://via.placeholder.com/150/24f355"
        },
        {
          albumId: 1,
          id: 4,
          title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
          url: "https://via.placeholder.com/600/d32776",
          thumbnailUrl: "https://via.placeholder.com/150/d32776"
        },
        {
          albumId: 1,
          id: 5,
          title: "natus nisi omnis corporis facere molestiae rerum in",
          url: "https://via.placeholder.com/600/f66b97",
          thumbnailUrl: "https://via.placeholder.com/150/f66b97"
        },
        {
          albumId: 1,
          id: 6,
          title: "accusamus ea aliquid et amet sequi nemo",
          url: "https://via.placeholder.com/600/56a8c2",
          thumbnailUrl: "https://via.placeholder.com/150/56a8c2"
        },
        {
          albumId: 1,
          id: 7,
          title:
            "officia delectus consequatur vero aut veniam explicabo molestias",
          url: "https://via.placeholder.com/600/b0f7cc",
          thumbnailUrl: "https://via.placeholder.com/150/b0f7cc"
        },
        {
          albumId: 1,
          id: 8,
          title: "aut porro officiis laborum odit ea laudantium corporis",
          url: "https://via.placeholder.com/600/54176f",
          thumbnailUrl: "https://via.placeholder.com/150/54176f"
        }
      ],
      chosenComponent: "",
      val: 10
    };
  }
};
</script>

<style scoped>
.home {
  background-color: #eeeeee;
}
</style>
