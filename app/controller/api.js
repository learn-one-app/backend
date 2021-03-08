'use strict';

const Controller = require('egg').Controller;

class ApiController extends Controller {
  async index() {
    const { ctx, service } = this;
    const res = await service.user.find();
    ctx.body = {
      code: 200,
      data: res,
    };
  }
}

module.exports = ApiController;
