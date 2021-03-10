'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const { ctx, service } = this;
    const res = await service.user.find();
    ctx.body = {
      code: 200,
      data: res,
    };
  }
  async create() {
    const { ctx, service } = this;
    const res = await service.user.create(ctx.request.body.data);
    ctx.body = {
      code: 200,
      data: res,
    };
  }
  async update() {
    const { ctx, service } = this;
    const res = await service.user.find();
    ctx.body = {
      code: 200,
      data: res,
    };
  }
  async remove() {
    const { ctx, service } = this;
    const res = await service.user.find();
    ctx.body = {
      code: 200,
      data: res,
    };
  }
}

module.exports = UserController;
