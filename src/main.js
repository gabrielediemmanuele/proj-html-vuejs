import { createApp } from "vue";
import App from "./App.vue";

/* font awesome */
import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons"; */

library.add(/* faStarSolid */);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
