exports.up = (knex, Promise) => {
  return knex.schema
    .createTable('ChamadosFiep', table => {
      table.increments('id');
      table.integer('Solicitação de Serviço');
      table.string('Descrição do chamado', 255).notNullable();
      table.string('Solicitante Afetado', 255).notNullable();
      table.string('Unidade', 255).notNullable();
      table.string('E-mail', 255).notNullable();
      table.string('Data de Criação', 255).notNullable();
      table.string('Função de atendimento', 255).notNullable();
    })
    .createTable('ChamadosFiepRealizados', table => {
      table.increments('id');
      table.bigInteger('SolicitacaoNumero').notNullable();
      table.datetime('TarefaAbertaEM', { precision: 6 });
    });
};

exports.down = (knex, Promise) => {
  return knex.schema
    .dropTable('ChamadosFiep')
    .dropTable('ChamadosFiepRealizados');
};
