import app from './express.js';
import { log } from './commons/index.js';

const enableExpress = () => {
  app.listen(app.settings, () => {
    log.debug(`Express is listening on port ${app.settings.port}`);
  });
};

enableExpress();
