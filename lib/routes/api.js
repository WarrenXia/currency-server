import Router from 'koa-router';
const api = new Router();

api.get('/', async(ctx, next) => {
  console.log(ctx.url);
  ctx.body = 'api'
});

export default api;
