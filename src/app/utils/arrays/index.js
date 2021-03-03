export const isEmptyArray = (array) =>
   array === null || typeof array !== 'object' || array.constructor !== Array || array?.length <= 0;
