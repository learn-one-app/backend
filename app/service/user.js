'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async find() {
    const data = await this.app.model.User.find();
    return data;
  }
  async create(option) {
    const model = await this.app.model.User.create(option);
    return model;
  }
}

module.exports = UserService;
