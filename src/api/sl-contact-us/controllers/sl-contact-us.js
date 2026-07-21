'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::sl-contact-us.sl-contact-us', ({ strapi }) => ({
  async find(ctx) {
    const newCtx = {
      ...ctx,
      query: {
        ...ctx.query,
        populate: {
          Addresses: {
            populate: {
              contactInfo: true,
            },
          },
          otherSection: {
            populate: {
              contactInfo: true,
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
          Addresses: {
            populate: {
              contactInfo: true,
            },
          },
          otherSection: {
            populate: {
              contactInfo: true,
            },
          },
          metaTags: true,
        },
      },
    };
    return await super.findOne(newCtx);
  },
}));