const paypal = require('paypal-rest-sdk');

paypal.configure({
  mode: 'sandbox', 
  client_id: 'AR2JeloFIzkVJoTf5dl0YnoYrJ2wELdUg67IZyuyu3ZMoShkiKmXqUVcJ2BofUvkdtkA9gnOF5pXhnSQ',
  client_secret: 'EE8DoAwPpfrggZm10TZjD6lC4AwAjPShMt9QMTKi8smro_-Gfj8VAxgLXPRcCekyvW4pyG_yPa1RYPhX'
});

module.exports = paypal;
