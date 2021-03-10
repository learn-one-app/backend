'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/api/user', controller.user.index);
  router.post('/api/user', controller.user.create);
  router.put('/api/user', controller.user.update);
  router.delete('/api/user', controller.user.delete);
};
