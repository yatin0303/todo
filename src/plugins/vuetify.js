import "@mdi/font/css/materialdesignicons.css";
import "vuetify/lib/styles/main.sass";
import { createVuetify } from "vuetify";
import { aliases, md } from "vuetify/lib/iconsets/md";
import * as components from "vuetify/lib/components";
import * as directives from "vuetify/lib/directives";

export default createVuetify({
  icons: {
    defaultSet: "md",
    aliases,
    sets: {
      md,
    },
  },
  components,
  directives,
});
