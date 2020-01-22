exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('ChamadosFiep')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('ChamadosFiep').insert([
        {
          ID: 10,
          'Solicitação de Serviço': 618283.0,
          'Descrição do chamado':
            'Bom Dia, por gentileza solicito um orçamento de reparo/manutenção em calha/rufo no telhado do bloco 04, sala 01, para solucionar problema de goteira e infiltração, Obrigado.',
          'Solicitante Afetado': 'THIAGO13622',
          Unidade: 'SENAI - TELEMACO BORBA',
          'Data de Criação': '12/06/19 21:16 PM',
          'E-mail': 'marcos.v.gomes@gpssa.com.br',
          'Função de atendimento': 'Analista de Projetos Sr',
        },
        {
          ID: 11,
          'Solicitação de Serviço': 618284.0,
          'Descrição do chamado': 'PINTAR PORTA BANHEIRO FEMININO ALUNOS.',
          'Solicitante Afetado': 'ADENIR5868',
          Unidade: 'SENAI - TELEMACO BORBA',
          'Data de Criação': '11/14/19 10:50 AM',
          'E-mail': 'marcos.v.gomes@gpssa.com.br',
          'Função de atendimento': 'Oficial de Manutenção',
        },
        {
          ID: 12,
          'Solicitação de Serviço': 618279.0,
          'Descrição do chamado':
            'COLOCAÇÃO DE BORRACHA ANTI-DERRAPANTE NA RAMPA QUE DESCE PARA BIBLIOTECA.',
          'Solicitante Afetado': 'ADENIR5868',
          Unidade: 'SENAI - TELEMACO BORBA',
          'Data de Criação': '11/14/19 10:47 AM',
          'E-mail': 'marcos.v.gomes@gpssa.com.br',
          'Função de atendimento': 'Oficial de Manutenção',
        },
        {
          ID: 13,
          'Solicitação de Serviço': 618246.0,
          'Descrição do chamado':
            'FIXAÇÃO DE CHAPA NA LATERAL DO PRÉDIO QUE SOLTOU COM A CHUVA E VENTO.',
          'Solicitante Afetado': 'ADENIR5868',
          Unidade: 'SENAI - TELEMACO BORBA',
          'Data de Criação': '11/14/19 10:28 AM',
          'E-mail': 'marcos.v.gomes@gpssa.com.br',
          'Função de atendimento': 'Oficial de Manutenção',
        },
        {
          ID: 14,
          'Solicitação de Serviço': 618256.0,
          'Descrição do chamado':
            'Bom Dia, solicito por gentileza a limpeza/desentupimento da rede de escoamento, da quadra poliesportiva da unidade de Apucarana.',
          'Solicitante Afetado': 'THIAGO13622',
          Unidade: 'SESI - APUCARANA',
          'Data de Criação': '11/14/19 10:34 AM',
          'E-mail': 'marcos.v.gomes@gpssa.com.br',
          'Função de atendimento': 'Oficial de Manutenção',
        },
        {
          ID: 15,
          'Solicitação de Serviço': 618232.0,
          'Descrição do chamado':
            'COLOCAÇÃO DE TOMADAS 110V PARA USO DE EQUIPAMENTOS.',
          'Solicitante Afetado': 'ADENIR5868',
          Unidade: 'SENAI - TELEMACO BORBA',
          'Data de Criação': '11/14/19 10:19 AM',
          'E-mail': 'marcos.v.gomes@gpssa.com.br',
          'Função de atendimento': 'Oficial de Manutenção',
        },

        {
          ID: 63,
          'Solicitação de Serviço': 614838.0,
          'Descrição do chamado':
            'Montar mesas do colegio sesi internacional.</div><div>OS:SESI PG </',
          'Solicitante Afetado': 'IRINEU3714',
          Unidade: 'SENAI - Ponta Grossa',
          'Data de Criação': '11/07/2019 16:44',
          'E-mail': 'marcos.v.gomes@gpssa.com.br',
          'Função de atendimento': 'Oficial de Manutenção',
        },
        {
          ID: 64,
          'Solicitação de Serviço': 614836.0,
          'Descrição do chamado':
            'Instalar 2 ventiladores de teto na sala do ADM S:SESI PG',
          'Solicitante Afetado': 'IRINEU3714',
          Unidade: 'SENAI - Ponta Grossa',
          'Data de Criação': '11/07/2019 16:40',
          'E-mail': 'marcos.v.gomes@gpssa.com.br',
          'Função de atendimento': 'Oficial de Manutenção',
        },
        {
          ID: 65,
          'Solicitação de Serviço': 614758.0,
          'Descrição do chamado':
            'Ar condicionado da sala TI onde fica o servidor nao esta funcionando favor fazer manutenção com urgência. OS:SENAI PG ',
          'Solicitante Afetado': 'IRINEU3714',
          Unidade: 'SENAI - Ponta Grossa',
          'Data de Criação': '11/07/2019 15:29',
          'E-mail': 'marcos.v.gomes@gpssa.com.br',
          'Função de atendimento': 'Oficial de Manutenção',
        },
        {
          ID: 66,
          'Solicitação de Serviço': 614723.0,
          'Descrição do chamado':
            'Estamos com problemas com as fechaduras das portas das salas de ',
          'Solicitante Afetado': 'CRISTIANE5309',
          Unidade: 'SENAI - MARINGA',
          'Data de Criação': '11/07/2019 14:57',
          'E-mail': 'marcos.v.gomes@gpssa.com.br',
          'Função de atendimento': 'Oficial de Manutenção',
        },
        {
          ID: 67,
          'Solicitação de Serviço': 614593.0,
          'Descrição do chamado':
            'Uma bacia de pia maior com água aquecida, uma duchinha para lavar os cabelos dos pacientes que realizam o eletroencefalograma.á tem a estrutura de chuveiro, mudar o localização do banheiro masculino para o feminino, que é maior UNIDADE DE RIO BRANCO DO SU',
          'Solicitante Afetado': 'GENAIDE11113',
          Unidade: 'SESI - Boqueirao',
          'Data de Criação': '11/07/2019 12:11',
          'E-mail': 'marcos.v.gomes@gpssa.com.br',
          'Função de atendimento': 'Oficial de Manutenção',
        },

        {
          ID: 85,
          'Solicitação de Serviço': 613354.0,
          'Descrição do chamado':
            'E PISO TERREO, PASSAR MANGUEIRA DO AR COMPRIMIDO DA MARCENARIA PARA A SALA 01, INSTALAR O REPARO DA CAIXA DE DESCARGA ACOPLADA, COLOCAR LONA NOS EQUIPAMENTOS EXTERNOS.',
          'Solicitante Afetado': 'GENAIDE11113',
          Unidade: 'SESI - Boqueirao',
          'Data de Criação': '11/05/2019 16:35',
          'E-mail': 'marcos.v.gomes@gpssa.com.br',
          'Função de atendimento': 'Oficial de Manutenção',
        },
        {
          ID: 86,
          'Solicitação de Serviço': 613244.0,
          'Descrição do chamado':
            '6.  Quantidade de caixas? 1 na área de Panificação e 1 na área da Cantina. ',
          'Solicitante Afetado': 'POLYANA5324',
          Unidade: 'SENAI - CASCAVEL',
          'Data de Criação': '11/05/2019 15:34',
          'E-mail': 'marcos.v.gomes@gpssa.com.br',
          'Função de atendimento': 'Oficial de Manutenção',
        },
        {
          ID: 87,
          'Solicitação de Serviço': 613235.0,
          'Descrição do chamado': 'Boa tarde ,  ',
          'Solicitante Afetado': 'POLYANA5324',
          Unidade: 'SENAI - CASCAVEL',
          'Data de Criação': '11/05/2019 15:29',
          'E-mail': 'tali.vitoriano@gmail.com',
          'Função de atendimento': 'Oficial de Manutenção',
        },
        {
          ID: 88,
          'Solicitação de Serviço': 613231.0,
          'Descrição do chamado':
            'precisamos de Dedetização / Desratização  nas unidade de Cascavel ',
          'Solicitante Afetado': 'POLYANA5324',
          Unidade: 'SENAI - CASCAVEL',
          'Data de Criação': '11/05/2019 15:26',
          'E-mail': 'tali.vitoriano@gmail.com',
          'Função de atendimento': 'Oficial de Manutenção',
        },
        {
          ID: 89,
          'Solicitação de Serviço': 613187.0,
          'Descrição do chamado':
            'Solicito orçamento das lavagem das parecer da unidade .   ',
          'Solicitante Afetado': 'POLYANA5324',
          Unidade: 'SENAI - CASCAVEL',
          'Data de Criação': '11/05/2019 15:00',
          'E-mail': 'tali.vitoriano@gmail.com',
          'Função de atendimento': 'Oficial de Manutenção',
        },
        {
          ID: 90,
          'Solicitação de Serviço': 612728.0,
          'Descrição do chamado':
            '<div>Arrumar persiana que caíram na sala 7</div> ',
          'Solicitante Afetado': 'IRINEU3714',
          Unidade: 'SENAI - Ponta Grossa',
          'Data de Criação': '11/05/2019 08:51',
          'E-mail': 'tali.vitoriano@gmail.com',
          'Função de atendimento': 'Oficial de Manutenção',
        },
        {
          ID: 91,
          'Solicitação de Serviço': 612710.0,
          'Descrição do chamado':
            'substituir saboneteira no banheiro masculino bloco 4<S:SENAI PG ',
          'Solicitante Afetado': 'IRINEU3714',
          Unidade: 'SENAI - Ponta Grossa',
          'Data de Criação': '11/05/2019 08:37',
          'E-mail': 'tali.vitoriano@gmail.com',
          'Função de atendimento': 'Oficial de Manutenção',
        },
        {
          ID: 92,
          'Solicitação de Serviço': 612607.0,
          'Descrição do chamado':
            'O aparelho de ar condicionado não esta refrigerando, se mantermos ligado o ar fica quente, localização do aparelho fica na sala da coordenação. ',
          'Solicitante Afetado': 'LUCIANE4184',
          Unidade: 'SENAI - Telemaco Borba',
          'Data de Criação': '11/04/2019 20:49',
          'E-mail': 'tali.vitoriano@gmail.com',
          'Função de atendimento': 'Oficial de Manutenção',
        },
        {
          ID: 93,
          'Solicitação de Serviço': 612540.0,
          'Descrição do chamado':
            'Piscina esta imunda, estamos prestes a sermos multados. Esta totalmente verde e suja',
          'Solicitante Afetado': 'ERI5851',
          Unidade: 'SESI - Londrina',
          'Data de Criação': '11/04/2019 18:10',
          'E-mail': 'tali.vitoriano@gmail.com',
          'Função de atendimento': 'Oficial de Manutenção',
        },
        {
          ID: 94,
          'Solicitação de Serviço': 612467.0,
          'Descrição do chamado':
            'CONSERTO DE UMA DESCARGA DO BANHEIRO MASCULINO E SERVIÇO DE CONSERTO A PORTA (PARTE DE CIMENTO) DO BANHEIRO MASCULINO.',
          'Solicitante Afetado': 'ADRIANA12678',
          Unidade: 'SESI - JAGUARIAIVA',
          'Data de Criação': '11/04/2019 17:37',
          'E-mail': 'tali.vitoriano@gmail.com',
          'Função de atendimento': 'Oficial de Manutenção',
        },
        {
          ID: 95,
          'Solicitação de Serviço': 612409.0,
          'Descrição do chamado':
            'Realizar substituição de peça da tubulação de ar comprimido que esta com vazamento no laboratório de minerais.OS:SENAI.',
          'Solicitante Afetado': 'IRINEU3714',
          Unidade: 'SENAI - Ponta Grossa',
          'Data de Criação': '11/04/2019 17:09',
          'E-mail': 'tali.vitoriano@gmail.com',
          'Função de atendimento': 'Oficial de Manutenção',
        },
        {
          ID: 96,
          'Solicitação de Serviço': 612089.0,
          'Descrição do chamado':
            '<div>O AR CONDICIONADO NÃO ESTA GELANDO, MESMO COM A TEMPERATURA MINIMA 18. ELE APENAS VENTILA QUENTE.</div><!-- RICH TEXT -->',
          'Solicitante Afetado': 'ANGELITA5122',
          Unidade: 'SENAI - Londrina',
          'Data de Criação': '11/04/2019 12:58',
          'E-mail': 'tali.vitoriano@gmail.com',
          'Função de atendimento': 'Oficial de Manutenção',
        },
        {
          ID: 97,
          'Solicitação de Serviço': 612023.0,
          'Descrição do chamado':
            'Bom dia! Solicitamos reparo no piso do banheiro masculino da unidade de Rio Negro conforme imagem anexa, att Lis',
          'Solicitante Afetado': 'LIS5359',
          Unidade: 'SESI - Rio Negro',
          'Data de Criação': '11/04/2019 12:07',
          'E-mail': 'tali.vitoriano@gmail.com',
          'Função de atendimento': 'Oficial de Manutenção',
        },
        {
          ID: 98,
          'Solicitação de Serviço': 611953.0,
          'Descrição do chamado':
            'CONSERTO DAS CORTINAS DAS SALAS DE AULA E DO ADMINISTRATIVO QUE ESTÃO CAINDO OU QUE JÁ CAIRAM.INCLUIR COLOCAÇÃO DE ROLDANAS. ',
          'Solicitante Afetado': 'ADRIANA12678',
          Unidade: 'SESI - JAGUARIAIVA',
          'Data de Criação': '11/04/2019 11:26',
          'E-mail': 'tali.vitoriano@gmail.com',
          'Função de atendimento': 'Oficial de Manutenção',
        },
        {
          ID: 99,
          'Solicitação de Serviço': 611688.0,
          'Descrição do chamado':
            'Ar condicionado, foi instalado porem ainda nao tem ponto de energia para ligar.',
          'Solicitante Afetado': 'ELTON39321',
          Unidade: 'SENAI - LONDRINA',
          'Data de Criação': '11/03/2019 15:48',
          'E-mail': 'tali.vitoriano@gmail.com',
          'Função de atendimento': 'Oficial de Manutenção',
        },
        {
          ID: 100,
          'Solicitação de Serviço': 611613.0,
          'Descrição do chamado':
            'Quando será a agenda da limpeza ou visita para manutenção preventiva dos ar condicionado?  Até o momento a Unidade não recebeu nenhuma visita ou cronograma.   ',
          'Solicitante Afetado': 'FRANCIELI2824',
          Unidade: 'SENAI - Ampere',
          'Data de Criação': '11/01/2019 17:40',
          'E-mail': 'tali.vitoriano@gmail.com',
          'Função de atendimento': 'Oficial de Manutenção',
        },
        {
          ID: 101,
          'Solicitação de Serviço': 611612.0,
          'Descrição do chamado':
            'Tenho alguns serviços para o oficial de manutenção executar, porém a furadeira encaminhada pela GPS não tem broca Aguardamos o retorno com a previsão de chegada dos itens do equipamento.  ',
          'Solicitante Afetado': 'FRANCIELI2824',
          Unidade: 'SENAI - Ampere',
          'Data de Criação': '11/01/2019 17:37',
          'E-mail': 'tali.vitoriano@gmail.com',
          'Função de atendimento': 'Oficial de Manutenção',
        },
        {
          ID: 102,
          'Solicitação de Serviço': 611524.0,
          'Descrição do chamado':
            'Venho através desta solicitar novamente que encaminhem o técnico para verificar os aparelhos de ar condicionado das salas de aula da unidade, pois os problemas informados no chamado anterior de nº 604741 foram solucionados no dia, mas no dia seguinte os p',
          'Solicitante Afetado': 'EDSON4282',
          Unidade: 'SENAI - Quatro Barras',
          'Data de Criação': '11/01/2019 16:25',
          'E-mail': 'tali.vitoriano@gmail.com',
          'Função de atendimento': 'Oficial de Manutenção',
        },
        {
          ID: 103,
          'Solicitação de Serviço': 611242.0,
          'Descrição do chamado':
            'Após o vendaval de 31/10 uma fiação caiu devido a queda de algum galho. Solicito o reparo necessário na fiação, a mesma encontra-se solta.<!-- RICH TEXT -->',
          'Solicitante Afetado': 'JAQUELINE13260',
          Unidade: 'SESI - FOZ DO IGUACU',
          'Data de Criação': '11/01/2019 11:52',
          'E-mail': 'tali.vitoriano@gmail.com',
          'Função de atendimento': 'Oficial de Manutenção',
        },
        {
          ID: 104,
          'Solicitação de Serviço': 611229.0,
          'Descrição do chamado':
            'Após o vendaval de 31/10, caiu um galho no padrão de energia no jardim, solicito a remoção do galho e verificação de possível reparo.<!-- RICH TEXT -->',
          'Solicitante Afetado': 'JAQUELINE13260',
          Unidade: 'SESI - FOZ DO IGUACU',
          'Data de Criação': '11/01/2019 11:42',
          'E-mail': 'tali.vitoriano@gmail.com',
          'Função de atendimento': 'Oficial de Manutenção',
        },
        {
          ID: 105,
          'Solicitação de Serviço': 610838.0,
          'Descrição do chamado':
            '<div>Realizar substituições de todos os filtros que estão vencidos dos bebedouros.</div><div>OS:SESI PG </div><!-- RICH TEXT -->',
          'Solicitante Afetado': 'IRINEU3714',
          Unidade: 'SENAI - Ponta Grossa',
          'Data de Criação': '10/31/19 5:03 PM',
          'E-mail': 'tali.vitoriano@gmail.com',
          'Função de atendimento': 'Oficial de Manutenção',
        },
        {
          ID: 106,
          'Solicitação de Serviço': 610800.0,
          'Descrição do chamado':
            'Realizar substituições de todos os filtros que estão vencidos dos bebedouros.OS:SENAI PG - ',
          'Solicitante Afetado': 'IRINEU3714',
          Unidade: 'SENAI - Ponta Grossa',
          'Data de Criação': '10/31/19 4:44 PM',
          'E-mail': 'marcos.v.gomes@gpssa.com.br',
          'Função de atendimento': 'Oficial de Manutenção',
        },
        {
          ID: 107,
          'Solicitação de Serviço': 610787.0,
          'Descrição do chamado':
            'Fazer reparo no beiral do bloco 4 que soltou com ventos .OS:SENAI PG ',
          'Solicitante Afetado': 'IRINEU3714',
          Unidade: 'SENAI - Ponta Grossa',
          'Data de Criação': '10/31/19 4:35 PM',
          'E-mail': 'marcos.v.gomes@gpssa.com.br',
          'Função de atendimento': 'Oficial de Manutenção',
        },
        {
          ID: 108,
          'Solicitação de Serviço': 610774.0,
          'Descrição do chamado':
            'Fixar vista da porta do banheiro PCD na parte superior do bloco 6.</OS:SENAI PG ',
          'Solicitante Afetado': 'IRINEU3714',
          Unidade: 'SENAI - Ponta Grossa',
          'Data de Criação': '10/31/19 4:22 PM',
          'E-mail': 'marcos.v.gomes@gpssa.com.br',
          'Função de atendimento': 'Oficial de Manutenção',
        },
        {
          ID: 109,
          'Solicitação de Serviço': 610735.0,
          'Descrição do chamado':
            'Identificamos que após forte chuva, três salas da Unidade de Foz do Iguaçu, apresentaram problemas na vedação das janelas. Este problema ocasionou vazamento de água para dentro dos ambientes abaixo:  Sala Saúde e Segurança;  ',
          'Solicitante Afetado': 'JAQUELINE13260',
          Unidade: 'SESI - FOZ DO IGUACU',
          'Data de Criação': '10/31/19 3:44 PM',
          'E-mail': 'marcos.v.gomes@gpssa.com.br',
          'Função de atendimento': 'Oficial de Manutenção',
        },
        {
          ID: 110,
          'Solicitação de Serviço': 610449.0,
          'Descrição do chamado':
            'Estamos com um novo curso na unidade e se faz necessário a construção de uma bancada para o laboratório. Poderia realizar o orçamento para o serviço e para o material?',
          'Solicitante Afetado': 'KARIN6139',
          Unidade: 'SENAI - COLOMBO',
          'Data de Criação': '10/31/19 11:17 AM',
          'E-mail': 'marcos.v.gomes@gpssa.com.br',
          'Função de atendimento': 'Oficial de Manutenção',
        },
        {
          ID: 177,
          'Solicitação de Serviço': null,
          'Descrição do chamado':
            'Fazer manutenção do aparelho que apresenta muitas vibrações  OS:SESI PG ',
          'Solicitante Afetado': 'IRINEU3714',
          Unidade: 'SENAI - Ponta Grossa',
          'Data de Criação': '10/10/2019 16:04',
          'E-mail': 'marcos.v.gomes@gpssa.com.br',
          'Função de atendimento': 'Oficial de Manutenção',
        },
        {
          ID: 178,
          'Solicitação de Serviço': 599485.0,
          'Descrição do chamado':
            'Gostaria de solicitar por favor a troca de 02 refletores  de poste que estão queimados na unidade pela empresa de Facilities, é necessário andaime para o serviço',
          'Solicitante Afetado': 'PRISCILA12490',
          Unidade: 'SESI - APUCARANA',
          'Data de Criação': '10/10/2019 10:23',
          'E-mail': 'marcos.v.gomes@gpssa.com.br',
          'Função de atendimento': 'Oficial de Manutenção',
        },
        {
          ID: 179,
          'Solicitação de Serviço': 599438.0,
          'Descrição do chamado': 'Na unidade de Rio ',
          'Solicitante Afetado': 'GENAIDE11113',
          Unidade: 'SESI - Boqueirao',
          'Data de Criação': '10/10/2019 09:43',
          'E-mail': 'marcos.v.gomes@gpssa.com.br',
          'Função de atendimento': 'Oficial de Manutenção',
        },
      ]);
    });
};
