'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async find() {
    const data = await this.app.model.User.find();
    return data;
  }
  async create(option) {
    const data = await this.app.model.User.create(option);
    return data;
  }
  async update(id, option) {
    console.log(id, option);

    const data = await this.app.model.User.findByIdAndUpdate(id, { $set: option });
    return data;
  }
  async delete(id) {
    const data = await this.app.model.User.findByIdAndDelete(id);
    return data;
  }
}

module.exports = UserService;
