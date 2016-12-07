import Koa from 'koa';
import Router from 'koa-router';
import api from './routes/api';

const PORT = process.env.PORT || 2046;
const app = new Koa();
const router = new Router();

app.proxy = true;
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

app.listen(PORT);
