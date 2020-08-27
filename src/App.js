import React, { Component } from 'react';
import './App.css';
import DinamicTable from './components/DinamicTable/DinamicTable'
import StrategyFilter from './components/StrategyFilter/StrategyFilter'

const initialState = {
  funds: [
      {
        "initial_date": "2019-02-27",
        "performance_audios": [
          
        ],
        "fees": {
          "maximum_administration_fee": "Não há",
          "anticipated_retrieval_fee_value": "0.00",
          "administration_fee": "0,93%",
          "anticipated_retrieval_fee": "Não há",
          "performance_fee": "Não há",
          "has_anticipated_retrieval": false
        },
        "is_simple": false,
        "description_seo": "Investir em fundos pela Órama é a melhor forma de acessar todos os investimentos sem preocupação, afinal, tem sempre um especialista cuidando disso para você.",
        "operability": {
          "has_operations_on_thursdays": false,
          "retrieval_liquidation_days_type": "úteis",
          "application_quotation_days_type": "úteis",
          "retrieval_quotation_days": 1,
          "anticipated_retrieval_quotation_days_type": "corridos",
          "anticipated_retrieval_quotation_days_str": "Não há",
          "retrieval_quotation_days_type": "úteis",
          "anticipated_retrieval_quotation_days": 0,
          "has_operations_on_wednesdays": true,
          "minimum_balance_permanence": "10000.00",
          "has_operations_on_mondays": false,
          "has_grace_period": false,
          "application_time_limit": "13:00:59",
          "retrieval_time_limit": "13:00:59",
          "has_operations_on_fridays": false,
          "anticipate_retrieval_liquidation_days": 0,
          "minimum_initial_application_amount": "25000.00",
          "anticipate_retrieval_liquidation_days_type": "corridos",
          "retrieval_special_type": "",
          "anticipate_retrieval_liquidation_days_str": "Não há",
          "application_quotation_days_str": "D+1 (somente às quartas-feiras)",
          "grace_period_in_days_str": null,
          "retrieval_quotation_days_str": "D+1 (somente às quartas-feiras)",
          "grace_period_in_days": 0,
          "retrieval_liquidation_days_str": "D+5",
          "minimum_subsequent_retrieval_amount": "0.00",
          "retrieval_direct": false,
          "retrieval_liquidation_days": 5,
          "application_quotation_days": 1,
          "max_balance_permanence": "0.00",
          "maximum_initial_application_amount": "0.00",
          "has_operations_on_tuesdays": false,
          "minimum_subsequent_application_amount": "5000.00"
        },
        "full_name": "PIMCO Income Dólar FIC FIM IE",
        "opening_date": null,
        "id": 1013,
        "is_closed": false,
        "simple_name": "PIMCO Income Dólar FIC FIM IE",
        "target_fund": null,
        "documents": [
          {
            "position": 1,
            "document_type": "Regulamento",
            "name": "Regulamento",
            "document_url": "app_img/fund_document/R_-__PIMCO_Income_Dólar_FIC_FIM_IE_-_20190208.pdf"
          },
          {
            "position": 2,
            "document_type": "Formulário de Informações Complementares",
            "name": "Formulário de Informações Complementares",
            "document_url": "app_img/fund_document/FORM_INFO_COMP_-_PIMCO_Income_Dólar_FIC_FIM_IE_2019_02_08.pdf"
          },
          {
            "position": 0,
            "document_type": "Lâmina",
            "name": "Lâmina",
            "document_url": "app_img/fund_document/20200812010154_PIMCO_Income_Dólar_FIC_FIM_IE.pdf"
          },
          {
            "position": 0,
            "document_type": "Material de Distribuição",
            "name": "Material de Distribuição",
            "document_url": "app_img/fund_document/20200812120052_PIMCO_Income_Dólar_FIC_FIM_IE.pdf"
          }
        ],
        "specification": {
          "fund_suitability_profile": {
            "score_range_order": 1,
            "name": "Conservador"
          },
          "fund_risk_profile": {
            "score_range_order": 4,
            "name": "Régua de risco 4"
          },
          "is_qualified": true,
          "fund_type": "Multimercado",
          "fund_class": "Multimercado Investimento no Exterior",
          "fund_macro_strategy": {
            "explanation": "Fundos que buscam retorno por meio de investimentos em ativos de renda fixa. São indicados para a parcela conservadora da carteira do investidor. Podem investir em títulos públicos e/ ou em títulos privados, com remuneração prefixada, pós-fixada ou atrelada a algum índice de preço.",
            "id": 1,
            "name": "Renda Fixa"
          },
          "fund_class_anbima": null,
          "fund_main_strategy": {
            "explanation": "Fundos que investem em uma carteira diversificada de títulos de renda fixa, soberanos ou privados, principalmente estrangeiros. A seleção dos títulos é baseada em análise fundamentalista.",
            "fund_macro_strategy": 1,
            "id": 21,
            "name": "Renda Fixa Global"
          }
        },
        "quota_date": "2020-08-25",
        "tax_classification": "Longo prazo",
        "cnpj": "32.225.478/0001-06",
        "description": {
          "objective": "A política de investimento do FUNDO consiste\r\nem aplicar, no mínimo, 95% (noventa e cinco por cento)\r\nde seu patrimônio líquido em cotas do PIMCO INCOME\r\nDÓLAR FUNDO DE INVESTIMENTO MULTIMERCADO\r\nINVESTIMENTO NO EXTERIOR, inscrito no CNPJ nº\r\n32.225.606/0001-11 (“Fundo Master”), administrado pelo\r\nADMINISTRADOR e gerido pela GESTORA, cuja\r\npolítica de investimento consiste em aplicar os recursos\r\ndos cotistas em instrumentos, valores mobiliários e\r\nativos financeiros de diferentes naturezas e\r\ncaracterísticas, de acordo com uma política de gestão\r\nde carteira com o objetivo de que visa a obter\r\noportunidades em diferentes mercados, baseada em\r\numa sólida análise macroeconômica e sujeita às\r\nrestrições descritas no presente Regulamento.",
          "movie_url": null,
          "target_audience": "Investidores Qualificados",
          "strengths": "A PIMCO foi fundada em 1971, presente em 12 países e no Brasil desde 2012. Recebeu vários prêmios da Morningstar como Gestor de Renda Fixa. Indicado para diversificação global.",
          "strategy": "Fundo classificado como Renda Fixa Global - Investimento no Exterior, com objetivo de retorno de CDI+3% ao ano no médio/longo prazo. O Fundo investe no mercado de renda fixa global, com exposição cambial, com base em análise macroeconômica e fundamentalista. Possui uma gestão internacional que busca das melhores oportunidades de renda fixa ao redor do mundo, com o objetivo de captar as grandes tendências."
        },
        "performance_videos": [
          
        ],
        "is_active": true,
        "benchmark": {
          "id": 2,
          "name": "CDI"
        },
        "orama_standard": true,
        "slug": "PIMCO-Income-Dolar-FIC-FIM-IE",
        "fund_situation": {
          "code": "1",
          "name": "Fundo aberto"
        },
        "volatility_12m": "0.166703",
        "strategy_video": null,
        "insurance_company_code": null,
        "profitabilities": {
          "m60": null,
          "m48": null,
          "m24": null,
          "m36": null,
          "month": "0.067213",
          "m12": "0.399629",
          "year": "0.375316",
          "day": "-0.011995"
        },
        "closed_to_capture_explanation": "",
        "closing_date": null,
        "net_patrimony_12m": "0.00",
        "is_closed_to_capture": false,
        "fund_manager": {
          "description": "Fundada em 1971, a PIMCO é formada por mais de 2.000 profissionais dedicados, em 12 países, compartilhando a mesma missão: gerenciar riscos e gerar retorno para nossos clientes. Gerimos investimentos para uma ampla variedade de clientes, incluindo fundos de pensão públicos e privados, bem como ativos em nome de milhões de pessoas, de todos os extratos sociais, em todo o mundo. Somos investidores de longo prazo e líderes de opinião. Nossas perspectivas e soluções baseiam-se em um processo de investimento comprovado, que gera visões macroeconômicas cíclicas (de curto prazo) e seculares (de três a cinco anos), e que alia essas previsões com profundas pesquisas de crédito, análises de capital e gerenciamento de riscos. Em 30/Jun/2016 a PIMCO possuía USD 1,51 trilhões de ativos sob gestão.",
          "id": 41,
          "full_name": "PIMCO Latin America Administradora de Carteiras LTDA.",
          "logo": "app_img/manager/logo_small/pimco.jpg",
          "slug": "PIMCO",
          "name": "PIMCO"
        }
      },
      {
        "initial_date": "2014-04-11",
        "performance_audios": [
          
        ],
        "fees": {
          "maximum_administration_fee": "0,35%",
          "anticipated_retrieval_fee_value": "0.00",
          "administration_fee": "0,30%",
          "anticipated_retrieval_fee": "Não há",
          "performance_fee": "20% do que exceder o IRF-M 1+",
          "has_anticipated_retrieval": false
        },
        "is_simple": false,
        "description_seo": "Este  Fundo é ideal para investidores que buscam exposição a prefixados nominais com vencimentos de médio e longo prazos. Perfil de risco Conservador.",
        "operability": {
          "has_operations_on_thursdays": true,
          "retrieval_liquidation_days_type": "úteis",
          "application_quotation_days_type": "úteis",
          "retrieval_quotation_days": 0,
          "anticipated_retrieval_quotation_days_type": "corridos",
          "anticipated_retrieval_quotation_days_str": "Não há",
          "retrieval_quotation_days_type": "úteis",
          "anticipated_retrieval_quotation_days": 0,
          "has_operations_on_wednesdays": true,
          "minimum_balance_permanence": "500.00",
          "has_operations_on_mondays": true,
          "has_grace_period": false,
          "application_time_limit": "14:00:59",
          "retrieval_time_limit": "14:00:59",
          "has_operations_on_fridays": true,
          "anticipate_retrieval_liquidation_days": 0,
          "minimum_initial_application_amount": "500.00",
          "anticipate_retrieval_liquidation_days_type": "corridos",
          "retrieval_special_type": "",
          "anticipate_retrieval_liquidation_days_str": "Não há",
          "application_quotation_days_str": "D+0",
          "grace_period_in_days_str": null,
          "retrieval_quotation_days_str": "D+0",
          "grace_period_in_days": 0,
          "retrieval_liquidation_days_str": "D+1",
          "minimum_subsequent_retrieval_amount": "500.00",
          "retrieval_direct": false,
          "retrieval_liquidation_days": 1,
          "application_quotation_days": 0,
          "max_balance_permanence": "0.00",
          "maximum_initial_application_amount": "0.00",
          "has_operations_on_tuesdays": true,
          "minimum_subsequent_application_amount": "500.00"
        },
        "full_name": "Icatu Vanguarda Pré-Fixado Fundo de Investimento Renda Fixa Longo Prazo",
        "opening_date": null,
        "id": 386,
        "is_closed": false,
        "simple_name": "Icatu Vanguarda Pré-Fixado FIRF LP",
        "target_fund": null,
        "documents": [
          {
            "position": 2,
            "document_type": "Formulário de Informações Complementares",
            "name": "Formulário de Informações Complementares",
            "document_url": "app_img/fund_document/FORM_INFO_COMP_-_Icatu_Vanguarda_Pré-Fixado_FIRF_LP_2016_06_30.pdf"
          },
          {
            "position": 1,
            "document_type": "Regulamento",
            "name": "Regulamento",
            "document_url": "app_img/fund_document/R_-_Icatu_Vanguarda_Pré-Fixado_FIRF_LP_-_20191120.pdf"
          },
          {
            "position": 4,
            "document_type": "Lâmina",
            "name": "Lâmina",
            "document_url": "app_img/fund_document/20200812010054_Icatu_Vanguarda_Pré-Fixado_FIRF_LP.pdf"
          },
          {
            "position": 5,
            "document_type": "Material de Distribuição",
            "name": "Material de Distribuição",
            "document_url": "app_img/fund_document/20200812120031_Icatu_Vanguarda_Pré-Fixado_FIRF_LP.pdf"
          }
        ],
        "specification": {
          "fund_suitability_profile": {
            "score_range_order": 1,
            "name": "Conservador"
          },
          "fund_risk_profile": {
            "score_range_order": 3,
            "name": "Régua de risco 3"
          },
          "is_qualified": false,
          "fund_type": "Renda Fixa",
          "fund_class": "Renda Fixa Duração Alta Grau de Investimento",
          "fund_macro_strategy": {
            "explanation": "Fundos que buscam retorno por meio de investimentos em ativos de renda fixa. São indicados para a parcela conservadora da carteira do investidor. Podem investir em títulos públicos e/ ou em títulos privados, com remuneração prefixada, pós-fixada ou atrelada a algum índice de preço.",
            "id": 1,
            "name": "Renda Fixa"
          },
          "fund_class_anbima": "Fundos que devem manter, no mínimo, 80% do seu patrimônio líquido em títulos públicos federais ou ativos com baixo risco de crédito do mercado doméstico ou externo, com o prazo médio ponderado da carteira igual ou superior ao apurado no IMA-GERAL do último dia útil do mês de junho.",
          "fund_main_strategy": {
            "explanation": "Fundos que investem principalmente em ativos prefixados, podendo ser emitidos pelo governo ou por instituições privadas, para maximizar os rendimentos. Estes ativos são precificados diariamente de acordo com a expectativa de juros futuros, podendo haver oscilações negativas de curto prazo.",
            "fund_macro_strategy": 1,
            "id": 33,
            "name": "Renda Fixa Prefixado"
          }
        },
        "quota_date": "2020-08-25",
        "tax_classification": "Longo prazo",
        "cnpj": "19.418.031/0001-95",
        "description": {
          "objective": "O FUNDO tem por objetivo buscar retorno aos seus COTISTAS através de investimentos em ativos financeiros disponíveis nos mercados de renda fixa, derivativos e cotas de fundos de investimento, negociados nos mercados interno e externo, sendo vedada exposição de renda variável e alavancagem.",
          "movie_url": null,
          "target_audience": "Investidores em geral",
          "strengths": "Este  Fundo é ideal para investidores que buscam exposição a prefixados nominais com vencimentos de médio e longo prazos.",
          "strategy": "Fundo classificado como Renda Fixa, com meta de superar o índice IRF-M+1, ou seja, a carteira teórica  de títulos do Tesouro prefixados com vencimento acima de um ano. A carteira do Fundo é composta principalmente por títulos públicos com remuneração prefixada. A seleção dos títulos é baseada em análise macroeconômica."
        },
        "performance_videos": [
          
        ],
        "is_active": true,
        "benchmark": {
          "id": 25,
          "name": "IRF-M 1+"
        },
        "orama_standard": true,
        "slug": "Icatu-Vanguarda-Pre-Fixado-FIRF-LP",
        "fund_situation": {
          "code": "1",
          "name": "Fundo aberto"
        },
        "volatility_12m": "0.123410",
        "strategy_video": {
          "description": "",
          "title": "Estratégia do Fundo Icatu Vanguarda Pré-Fixado FIRF LP - Órama",
          "url": "http://www.youtube.com/watch?v=7dnEf6wuwA0",
          "published": "2018-05-03T01:53:19",
          "id": 12305,
          "enabled_for_tvorama": true,
          "youtube_id": "7dnEf6wuwA0",
          "thumbnail": "http://i.ytimg.com/vi/7dnEf6wuwA0/hqdefault.jpg"
        },
        "insurance_company_code": null,
        "profitabilities": {
          "m60": "1.106521",
          "m48": "0.814848",
          "m24": "0.401411",
          "m36": "0.506048",
          "month": "-0.017765",
          "m12": "0.131280",
          "year": "0.065450",
          "day": "-0.001159"
        },
        "closed_to_capture_explanation": "",
        "closing_date": null,
        "net_patrimony_12m": "295754987.22",
        "is_closed_to_capture": false,
        "fund_manager": {
          "description": "A grande vocação da Icatu Vanguarda é a gestão de recursos através de uma análise fundamentalista, tendo como horizontes de investimento o médio e longo prazos, visando assim maximizar as oportunidades de retorno para os seus clientes. A expertise da casa, que não deixa de ser o seu diferencial, vem do próprio DNA da asset, criada inicialmente para fazer a gestão dos recursos próprios do Grupo Icatu, além da gestão dos recursos dos planos de previdência da Icatu Seguros. A consistência dos retornos e a visão de longo prazo são, portanto, uma exigência desde o berço. A Icatu sempre se orgulhou de formar profissionais da mais alta competência dentro de casa, cultivando desde cedo a cultura da busca incessante pela melhor performance vis-à-vis o risco, calcada na transparência e na busca das soluções de investimento mais adequadas para o cliente, seja através da nossa grade de fundos abertos seja através de nossos fundos Taylor-Made. Temos como destaque fundos de inflação, crédito e dividendos, além de uma área exclusiva dedicada à alocação em classes de ativos. O processo de seleção de ativos é baseado na análise de risco e retorno e na análise fundamentalista, lastreados num cenário macroeconômico que é continuamente criticado, balanceado e ajustado dia após dia.\r\nTransparência, foco no cliente, dedicação extrema, visão de longo prazo e a busca pelo contínuo aprendizado são as armas da Icatu Vanguarda para continuar a atrair cada vez mais a atenção dos clientes e do mercado em geral em um ambiente cada dia mais competitivo.",
          "id": 131,
          "full_name": "Icatu Vanguarda Gestão de Recursos LTDA.",
          "logo": "app_img/manager/logo_small/ICATU_VANGUARDA.JPG",
          "slug": "Icatu-Vanguarda",
          "name": "Icatu Vanguarda"
        }
      },
      {
        "initial_date": "2004-10-07",
        "performance_audios": [
          
        ],
        "fees": {
          "maximum_administration_fee": "Não há",
          "anticipated_retrieval_fee_value": "0.00",
          "administration_fee": "0,80%",
          "anticipated_retrieval_fee": "Não há",
          "performance_fee": "Não há",
          "has_anticipated_retrieval": false
        },
        "is_simple": false,
        "description_seo": "Investir em fundos pela Órama é a melhor forma de acessar todos os investimentos sem preocupação, afinal, tem sempre um especialista cuidando disso para você.",
        "operability": {
          "has_operations_on_thursdays": true,
          "retrieval_liquidation_days_type": "úteis",
          "application_quotation_days_type": "úteis",
          "retrieval_quotation_days": 0,
          "anticipated_retrieval_quotation_days_type": "corridos",
          "anticipated_retrieval_quotation_days_str": "Não há",
          "retrieval_quotation_days_type": "úteis",
          "anticipated_retrieval_quotation_days": 0,
          "has_operations_on_wednesdays": true,
          "minimum_balance_permanence": "500.00",
          "has_operations_on_mondays": true,
          "has_grace_period": false,
          "application_time_limit": "14:00:59",
          "retrieval_time_limit": "14:00:59",
          "has_operations_on_fridays": true,
          "anticipate_retrieval_liquidation_days": 0,
          "minimum_initial_application_amount": "1000.00",
          "anticipate_retrieval_liquidation_days_type": "corridos",
          "retrieval_special_type": "",
          "anticipate_retrieval_liquidation_days_str": "Não há",
          "application_quotation_days_str": "D+0",
          "grace_period_in_days_str": null,
          "retrieval_quotation_days_str": "D+0",
          "grace_period_in_days": 0,
          "retrieval_liquidation_days_str": "D+1",
          "minimum_subsequent_retrieval_amount": "100.00",
          "retrieval_direct": false,
          "retrieval_liquidation_days": 1,
          "application_quotation_days": 0,
          "max_balance_permanence": "0.00",
          "maximum_initial_application_amount": "0.00",
          "has_operations_on_tuesdays": true,
          "minimum_subsequent_application_amount": "100.00"
        },
        "full_name": "Western Asset Renda Fixa Ativo Max Fundo de Investimento",
        "opening_date": null,
        "id": 897,
        "is_closed": false,
        "simple_name": "Western Asset Renda Fixa Ativo Max FIRF",
        "target_fund": null,
        "documents": [
          {
            "position": 1,
            "document_type": "Regulamento",
            "name": "Regulamento",
            "document_url": "app_img/fund_document/R_-__Western_Asset_Ativo_Max_FIRF_-_20190722.pdf"
          },
          {
            "position": 2,
            "document_type": "Formulário de Informações Complementares",
            "name": "Formulário de Informações Complementares",
            "document_url": "app_img/fund_document/FORM_INFO_COMP_-_Western_Asset_Ativo_Max_FIRF.pdf"
          },
          {
            "position": 3,
            "document_type": "Lâmina",
            "name": "Lâmina",
            "document_url": "app_img/fund_document/20200812010149_Western_Asset_Renda_Fixa_Ativo_Max_FIRF.pdf"
          },
          {
            "position": 0,
            "document_type": "Material de Distribuição",
            "name": "Material de Distribuição",
            "document_url": "app_img/fund_document/20200826200003_Western_Asset_Renda_Fixa_Ativo_Max_FIRF.pdf"
          }
        ],
        "specification": {
          "fund_suitability_profile": {
            "score_range_order": 1,
            "name": "Conservador"
          },
          "fund_risk_profile": {
            "score_range_order": 2,
            "name": "Régua de risco 2"
          },
          "is_qualified": false,
          "fund_type": "Renda Fixa",
          "fund_class": "Renda Fixa Duração Livre Soberano",
          "fund_macro_strategy": {
            "explanation": "Fundos que buscam retorno por meio de investimentos em ativos de renda fixa. São indicados para a parcela conservadora da carteira do investidor. Podem investir em títulos públicos e/ ou em títulos privados, com remuneração prefixada, pós-fixada ou atrelada a algum índice de preço.",
            "id": 1,
            "name": "Renda Fixa"
          },
          "fund_class_anbima": "Fundos que aplicam exclusivamente em títulos do Tesouro sem compromisso de manter qualquer limite para o prazo médio da carteira.",
          "fund_main_strategy": {
            "explanation": "Fundos que investem  pelo menos 80% de seus recursos em ativos de renda fixa com limite de até 50% em crédito privado. Assim sendo, combinam títulos públicos, títulos privados como CDBs, LFs, debêntures, podendo incluir crédito estruturado como FIDCs, para alcançar maiores rendimentos.",
            "fund_macro_strategy": 1,
            "id": 3,
            "name": "Renda Fixa"
          }
        },
        "quota_date": "2020-08-25",
        "tax_classification": "Longo prazo",
        "cnpj": "04.192.419/0001-43",
        "description": {
          "objective": "O FUNDO tem por objetivo proporcionar aos seus cotistas rentabilidade através das oportunidades oferecidas pelos mercados domésticos de taxa de juros pré-fixadas, taxas de juros de um dia praticadas no mercado interbancário e índices de preço.",
          "movie_url": null,
          "target_audience": "Investidores em geral",
          "strengths": "Fundo sob gestão de uma equipe sólida e com anos de experiência no mercado financeiro.",
          "strategy": "Fundo classificado como Renda Fixa. O Fundo poderá investir seus recursos em ativos financeiros com rendimentos pré ou pós fixados, índices de preço e inflação, limitando-se a títulos públicos federais, operações compromissadas lastreadas em títulos públicos federais e derivativos para proteção das posições detidas à vista (\"hedge\") e posicionamento."
        },
        "performance_videos": [
          
        ],
        "is_active": true,
        "benchmark": {
          "id": 2,
          "name": "CDI"
        },
        "orama_standard": false,
        "slug": "Western-Asset-Renda-Fixa-AtivoMax-FIRF",
        "fund_situation": {
          "code": "1",
          "name": "Fundo aberto"
        },
        "volatility_12m": "0.099001",
        "strategy_video": null,
        "insurance_company_code": null,
        "profitabilities": {
          "m60": "0.807880",
          "m48": "0.562757",
          "m24": "0.281910",
          "m36": "0.359850",
          "month": "-0.009371",
          "m12": "0.119314",
          "year": "0.074103",
          "day": "-0.001235"
        },
        "closed_to_capture_explanation": "",
        "closing_date": null,
        "net_patrimony_12m": "179510414.19",
        "is_closed_to_capture": false,
        "fund_manager": {
          "description": "A Western Asset Management Company é uma empresa americada que foi fundada em 1971 pelo United California Bank. Em 1986, foi adquirida pela Legg Mason. Como afiliada independente (em relação às outras empresas do grupo), a Western Asset opera como uma empresa de gestão de recursos de terceiros. Desde então, a Western Asset cresceu, vindo a tornar-se uma das mais importantes gestoras de investimentos financeiros dos Estados Unidos e do mundo. A partir dos atuais escritórios em Pasadena, Nova York, Londres, Cingapura, Tóquio, Hong Kong, Melbourne, Dubai e São Paulo, a Western Asset têm como foco o gerenciamento global de ativos através de uma gama completa de produtos para clientes em mais de 30 países no mundo todo. A Western Asset administra US$ 425,9 bilhões em ativos, em nome de centenas de clientes. Informações adicionais sobre a empresa e seus gestores estão disponíveis no seu website www.westernasset.com. No Brasil, a empresa iniciou suas atividades em 2005, ao dar continuidade a um negócio com quatro décadas de presença no mercado brasileiro de administração de recursos. Atualmente administramos R$ 40,2 bilhões em ativos no Brasil.",
          "id": 84,
          "full_name": "Western Asset Management Company DTVM Limitada",
          "logo": "app_img/manager/logo_small/Logo_Western_131x95.png",
          "slug": "Western-Asset-Management",
          "name": "Western Asset Management"
        }
      }
  ],
  orderedFund: {},
  maxRetrievalDays: 5000000,
  maxApplication: 500,
  minimumApplicationSearch: "",
  retrievalQuotationDaysSearch: ""
}

class App extends Component {

  constructor() {
    super()
    this.state = initialState;
  }

  componentWillMount = () =>{
    this.requestApi()
  }

  componentDidMount = () =>{
    // $('#minApplicationSlider').on('moved.zf.slider', function() {
    //   var value = $(this).attr('data-slider');
    //   console.log(value)
    // });
  }

  handleChange = (event) =>{
    this.setState({[event.target.id]: parseFloat(event.target.value)}, () =>
      this.filterData(this.state.minimumApplicationSearch,this.state.retrievalQuotationDaysSearch, [])
    );
  }

  filterData = (minimumApplication,retrievalQuotationDays, mainStrategys) =>{
    let filteredData = this.state.funds.filter(element => {
      // if(mainStrategys.includes(element.specification.fund_main_strategy.name)){
        let minInitialApp = parseFloat(element.operability.minimum_initial_application_amount).toFixed()
        if(minimumApplication !== "" && retrievalQuotationDays !== ""){
          if(minInitialApp <= minimumApplication &&
              element.operability.retrieval_quotation_days <= retrievalQuotationDays){
                console.log("minimumApplication + retrievalQuotationDays")

                return element
          }
        }else if(minimumApplication !== "" && 
          (minInitialApp <= minimumApplication)){
          console.log("minimumApplication")
          return element
        }else if(retrievalQuotationDays !== "" &&
          element.operability.retrieval_quotation_days <= retrievalQuotationDays){
          console.log("retrievalQuotationDays")
            return element
        }
      // }
    })
    this.orderByStrategy(filteredData)
  }

  getFilterMaxValue = (data) =>{
    let maxApplication = 0
    let maxRetrievalDays = 0
    data.forEach(function(element){
      if(maxApplication < parseFloat(element.operability.minimum_initial_application_amount)){
        maxApplication = parseFloat(element.operability.minimum_initial_application_amount)
      }
      if(maxRetrievalDays < element.operability.retrieval_quotation_days){
        maxRetrievalDays = element.operability.retrieval_quotation_days
      }
    })
    this.setState({maxRetrievalDays: maxRetrievalDays, maxApplication: maxApplication})
  }

  orderByStrategy = (data) => {
    let ordered = {}
    data.forEach(function(element){
      if(!ordered.hasOwnProperty(element.specification.fund_macro_strategy.name)){
        ordered[element.specification.fund_macro_strategy.name] = {}
      }
      if(!ordered[element.specification.fund_macro_strategy.name].hasOwnProperty(element.specification.fund_main_strategy.name)){
        ordered[element.specification.fund_macro_strategy.name][element.specification.fund_main_strategy.name] = []
      }
      ordered[element.specification.fund_macro_strategy.name][element.specification.fund_main_strategy.name].push(element)
    })
    this.setState({orderedFund: ordered})
  }

  requestApi = () => {
    this.orderByStrategy(this.state.funds)
    this.getFilterMaxValue(this.state.funds)
    // fetch('https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full')
    // .then(res => res.json())
    // .then(data => {
    //   this.setState({funds: this.state.funds.concat(data)})
    // })
    // .finally(() => {
    //   this.orderByStrategy(this.state.funds)
    //   this.getFilterMaxValue(this.state.funds)
    // });
  }

  render(){
    return (
      <div className="App">
        <div className="header">
          <h1>Lista de Fundos de Investimento</h1>
          <p>Conheça a nossa lista de fundos</p>
        </div>
        <div className=" grid-container">
          <div className="container grid-x grid-margin-x grid-margin-y">
          <div id="fund-filter" className="cell large-10">
          <div className="grid-container">
              <div className="grid-x">
                <div className="cell large-6">
                  <div className="input-group">
                    <input className="searchbar" type="search" placeholder="Buscar fundo por nome"></input>
                  </div>
                </div>
              </div>
                <div id="filter-container" className="grid-x">
                  <div className="cell large-4">
                    <p className="title">Aplicação Minima</p>
                    {/* <div id="minApplicationSlider" className="slider" data-slider data-initial-start={0} data-end={this.state.maxApplication}>
                      <span className="slider-handle" data-slider-handle role="slider" tabIndex="1" aria-valuemax={5000000} aria-valuemin={0} aria-valuenow={50}></span>
                      <span className="slider-fill" data-slider-fill></span>
                      <input type="text" onChange={(e) => this.handleChange(e)}></input>
                    </div> */}
                    <input id="minimumApplicationSearch" min="0" max={this.state.maxApplication} type="number" onChange={(e) => this.handleChange(e)}></input>
                  <p>Até R${this.state.maxApplication}</p>
                  </div>
                  <div className="cell large-4"></div>
                  <div className="cell large-4">
                    <p className="title">Prazo de Resgate</p>
                    {/* <div className="slider" data-slider data-initial-start="0">
                      <span className="slider-handle"  data-slider-handle role="slider" tabIndex="1" aria-valuemax={this.state.maxApplication} aria-valuemin={0} aria-valuenow={50}></span>
                      <span className="slider-fill" data-slider-fill></span>
                    </div> */}
                    <input id="retrievalQuotationDaysSearch" min="0" max={this.state.maxRetrievalDays} type="number" onChange={(e) => this.handleChange(e)}></input>
                    <p>Até {this.state.maxRetrievalDays} Dias Uteis</p>
                  </div>
                </div>
                <p className="application-limit">Horario Limite de aplicação 12:00</p>
              </div>
            </div>
          <div id="fund-strategy" className="cell large-2">
            <StrategyFilter funds={this.state.orderedFund}/>
          </div>
          <div id="fund-container" className="cell large-10">
            <div className="funds-table">
              <DinamicTable funds={this.state.orderedFund}/>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
