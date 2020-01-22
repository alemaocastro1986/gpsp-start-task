import { Model } from 'objection';
import Db from '../database';

Model.knex(Db);

class ChamadosFiepRealizados extends Model {
  static get tableName() {
    return 'ChamadosFiepRealizados';
  }
}

export default ChamadosFiepRealizados;
