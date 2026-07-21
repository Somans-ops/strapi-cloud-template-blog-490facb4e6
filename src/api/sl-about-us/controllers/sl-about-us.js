'use strict';

/**
 * sl-about-us controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::sl-about-us.sl-about-us', ({ strapi }) => ({
  async find(ctx) {
    // Set default populate to include all nested sections and media
    ctx.query = {
      ...ctx.query,
      populate: {
        AboutSections: {
          populate: {
            Banner: true
          }
        },
        DetailSection: true,
        FamousPeople: {
          populate: {
            Images: true
          }
        },
        MetaTags: true,
        ...(ctx.query.populate || {})
      }
    };
    return await super.find(ctx);
  },

  async findOne(ctx) {
    // Set default populate to include all nested sections and media
    ctx.query = {
      ...ctx.query,
      populate: {
        AboutSections: {
          populate: {
            Banner: true
          }
        },
        DetailSection: true,
        FamousPeople: {
          populate: {
            Images: true
          }
        },
        MetaTags: true,
        ...(ctx.query.populate || {})
      }
    };
    return await super.findOne(ctx);
  }
}));

