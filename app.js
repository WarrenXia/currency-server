import Koa from 'koa';
import Router from 'koa-router';
import api from './routes/api';

const app = new Koa();
const router = new Router();

app.use(async(ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.body = {
      message: err.message
    };
    ctx.status = err.status || 500;
  }
});

router.use('/api', api.routes(), api.allowedMethods());

app.use(router.routes());

app.listen(3000);
