import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/scss/variables/colors.scss";
          @import "./src/scss/variables/margins.scss";
          @import "./src/scss/variables/borders.scss";
          @import "./src/scss/variables/gaps.scss";
          @import "./src/scss/variables/paddings.scss";
          @import "./src/scss/variables/containerSpaces.scss";
          @import "./src/scss/variables/typography.scss";
          @import "./src/scss/layout/displays.scss";
          @import "./src/scss/helpers/functions.scss";
          @import "./src/scss/helpers/mixins.scss";
          @import "./src/scss/helpers/devices.scss";
          @import "./src/scss/fonts/fonts.scss";
        `,
      },
    },
  },
});
