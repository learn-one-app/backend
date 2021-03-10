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
    console.log(ctx.request.body);

    const res = await service.user.create(ctx.request.body);
    ctx.body = {
      code: 200,
      data: res,
    };
  }
  async update() {
    const { ctx, service } = this;
    const { id, ...rest } = ctx.request.body;
    const res = await service.user.update(id, rest);
    ctx.body = {
      code: 200,
      data: res,
    };
  }
  async delete() {
    const { ctx, service } = this;
    const { id } = ctx.request.body;
    const res = await service.user.delete(id);
    ctx.body = {
      code: 200,
      data: res,
    };
  }
}

module.exports = UserController;
