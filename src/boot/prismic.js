import { boot } from 'quasar/wrappers';
import { createPrismic } from "@prismicio/vue";
import linkResolver from '../prismic/link-resolver';


const prismic = createPrismic({
  endpoint: "https://luxoback.cdn.prismic.io/api/v2",
  linkResolver,
});

  export default boot(({ app }) => {
    // Set i18n instance on app
    app.use(prismic)
  })

export { prismic }



