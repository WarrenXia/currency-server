import Router from 'koa-router';
const api = new Router();

api.get('/', async(ctx, next) => {

  ctx.body = {
    querystring: ctx.querystring,
    query: ctx.query,
    search: ctx.search,
    ip: ctx.ip,
    path: ctx.path,
    url: ctx.url,
    type: ctx.type,
    headers: ctx.headers
  }

});

export default api;
