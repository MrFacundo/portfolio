import Vue from "vue";
import Vuetify from "vuetify/lib";
import "@fortawesome/fontawesome-free/css/all.css";
import MyIcon from "./icon.vue";

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		// ...
	},
	iconfont: "fa" || "mdi" || "simpleicons",
	icons: {
		values: {
			icon: {
				component: MyIcon, // you can use string here if component is registered globally
			},
		},
	},
});
