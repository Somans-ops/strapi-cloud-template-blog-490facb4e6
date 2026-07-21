'use strict';

/**
 * sl-package-detail controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::sl-package-detail.sl-package-detail', ({ strapi }) => ({
  async find(ctx) {
    ctx.query = {
      ...ctx.query,
      pagination: {
        ...ctx.query.pagination,
        pageSize: ctx.query?.pagination?.pageSize || 500,
      },
    };
    return super.find(ctx);
  },
}));


