'use strict';

const path = require('path')

const Controller = require('egg').Controller;

class NoteController extends Controller {
  async list() {
    const { ctx, app } = this;
    let user_id
    // 通过 token 解析，拿到 user_id
    const token = ctx.request.header.authorization;
    const decode = await app.jwt.verify(token, app.config.jwt.secret);
    if (!decode) return
    user_id = decode.id
    const list = await ctx.service.note.list(user_id)
    ctx.body = {
      code: 200,
      msg: '请求成功',
      data: {
        list
      }
    }
  }

  async add() {
    const { ctx, app } = this;
    const { note } = ctx.request.body;

    if (!note) {
      ctx.body = {
        code: 400,
        msg: '参数错误',
        data: null
      }
    }

    try {
      let user_id
      const token = ctx.request.header.authorization;
      const decode = await app.jwt.verify(token, app.config.jwt.secret);
      if (!decode) return
      user_id = decode.id
      const result = await ctx.service.note.add({
        content: note,
        create_time: new Date().getTime(),
        update_time: new Date().getTime(),
        user_id
      });
      ctx.body = {
        code: 200,
        msg: '请求成功',
        data: null
      }
    } catch (error) {
      ctx.body = {
        code: 500,
        msg: '系统错误',
        data: null
      }
    }
  }

  async delete() {
    const { ctx, app } = this;
    const { id } = ctx.request.body;

    if (!id) {
      ctx.body = {
        code: 400,
        msg: '参数错误',
        data: null
      }
    }

    try {
      let user_id
      const token = ctx.request.header.authorization;
      const decode = await app.jwt.verify(token, app.config.jwt.secret);
      if (!decode) return
      user_id = decode.id
      const result = await ctx.service.note.delete(id, user_id);
      ctx.body = {
        code: 200,
        msg: '请求成功',
        data: null
      }
    } catch (error) {
      ctx.body = {
        code: 500,
        msg: '系统错误',
        data: null
      }
    }
  }

  async update() {
    const { ctx, app } = this;
    const { id, note } = ctx.request.body;

    try {
      let user_id
      const token = ctx.request.header.authorization;
      const decode = await app.jwt.verify(token, app.config.jwt.secret);
      if (!decode) return
      user_id = decode.id
      const result = await ctx.service.note.update({
        id,
        content: note,
        update_time: new Date().getTime(),
        user_id
      });
      ctx.body = {
        code: 200,
        msg: '请求成功',
        data: null
      }
    } catch (error) {
      ctx.body = {
        code: 500,
        msg: '系统错误',
        data: null
      }
    }
  }
}

module.exports = NoteController;
