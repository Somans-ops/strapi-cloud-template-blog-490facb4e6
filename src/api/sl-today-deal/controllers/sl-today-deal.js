'use strict';

/**
 * sl-today-deal controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::sl-today-deal.sl-today-deal', ({ strapi }) => ({
  async find(ctx) {
    const { query } = ctx;

    const entities = await strapi
      .service('api::sl-today-deal.sl-today-deal')
      .find({
        ...query,
        populate: {
          blocks: {
            on: {
              'shared.card-flight-block': {
                populate: {
                  topImage: true,
                  flightItems: {
                    populate: {
                      airlineLogo: true,
                    },
                  },
                },
              },
              'shared.card-hotel-block': {
                populate: {
                  topImage: true,
                  hotelSlides: {
                    populate: {
                      hotelImage: true,
                    },
                  },
                },
              },
            },
          },
        },
      });

    return this.transformResponse(entities);
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    const { query } = ctx;

    const entity = await strapi
      .service('api::sl-today-deal.sl-today-deal')
      .findOne(id, {
        ...query,
        populate: {
          blocks: {
            on: {
              'shared.card-flight-block': {
                populate: {
                  topImage: true,
                  flightItems: {
                    populate: {
                      airlineLogo: true,
                    },
                  },
                },
              },
              'shared.card-hotel-block': {
                populate: {
                  topImage: true,
                  hotelSlides: {
                    populate: {
                      hotelImage: true,
                    },
                  },
                },
              },
            },
          },
        },
      });

    return this.transformResponse(entity);
  },
}));

