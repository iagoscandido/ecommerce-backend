import 'dotenv/config';
import app from './express.js';
import { log } from './commons/index.js';
import HealthCheck from './services/HealthCheck.js';

const enableExpress = () => {
  const server = app.listen(app.settings, () => {
    log.debug(`Express is listening on port ${app.settings.port}`);
  });

  new HealthCheck().execute().catch(() => server.close());
};

enableExpress();
