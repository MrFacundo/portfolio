<template>
  <v-app>
    <p-toolbar />
    <v-content style="background-color: #fff">
      <router-view />
    </v-content>
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
