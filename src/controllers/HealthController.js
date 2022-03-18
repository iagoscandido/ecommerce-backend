import { log } from '../commons/index.js';
import HealthCheck from '../services/HealthCheck.js';

export default class HealthController {
  static async get(_request, response) {
    log.debug('Health Controller');
    await new HealthCheck().execute();
    return response.status(200, 'Health OK');
  }
}
