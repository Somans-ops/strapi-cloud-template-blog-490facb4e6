'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::sl-career.sl-career', ({ strapi }) => ({
  async find(ctx) {
    const newCtx = {
      ...ctx,
      query: {
        ...ctx.query,
        populate: {
          CurrentOpenings: {
            populate: {
              Details: true,
            },
          },
          metaTags: true,
        },
      },
    };
    return await super.find(newCtx);
  },
  async findOne(ctx) {
    const newCtx = {
      ...ctx,
      query: {
        ...ctx.query,
        populate: {
          CurrentOpenings: {
            populate: {
              Details: true,
            },
          },
          metaTags: true,
        },
      },
    };
    return await super.findOne(newCtx);
  },
}));