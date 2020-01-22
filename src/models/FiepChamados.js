import { Model } from 'objection';
import Db from '../database';

Model.knex(Db);

class FiepChamados extends Model {
  static get tableName() {
    return 'ChamadosFiep';
  }
}

export default FiepChamados;
