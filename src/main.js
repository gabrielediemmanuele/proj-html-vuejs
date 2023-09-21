import { createApp } from "vue";
import App from "./App.vue";

/* font awesome */
import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faPlay as faPlaySolid } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight as faArrowRightSolid } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft as faArrowLeftSolid } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp as faArrowUpSolid } from "@fortawesome/free-solid-svg-icons";

//SOCIALS
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

library.add(
  faPlaySolid,
  faArrowRightSolid,
  faArrowLeftSolid,
  faArrowUpSolid,
  faFacebook,
  faTwitter,
  faInstagram
);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
