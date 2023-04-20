const stripe = require('stripe')(process.env.STRIPE_KEY )

'use strict';

/**
 * order router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::order.order',({strapi})=>{
    async function create(ctx){
     
    }
});
