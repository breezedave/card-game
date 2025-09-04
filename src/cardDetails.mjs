import { cardDetailsArrayWedding } from './wedding.mjs';
import { cardDetailsArrayVq } from './vq.mjs';

const cardDetailsObj = {};

let cardDetailsArray = [];
if (process.env.VERSION === 'wedding') cardDetailsArray = cardDetailsArrayWedding;
if (process.env.VERSION === 'vq') cardDetailsArray = cardDetailsArrayVq;

cardDetailsArray.forEach(({title, category, description}, i) => {
  cardDetailsObj[`card${i+1}`] = {
      title,
      category,
      description,
  };
})

export const cardDetails = cardDetailsObj