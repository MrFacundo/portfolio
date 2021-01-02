<template>
  <v-app>
    <p-toolbar />
    <v-main style="background-color: #fff">
      <router-view />
    </v-main>
    <p-footer />
  </v-app>
</template>

<script>
import PToolbar from "./components/PToolbar";
import PFooter from "./components/PFooter";

export default {
  name: "App",

  components: {
    PToolbar,
    PFooter
  },

  data: () => ({
    //
  })
};
</script>
