'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('seo-backup')
      .service('myService')
      .getWelcomeMessage();
  },
};
