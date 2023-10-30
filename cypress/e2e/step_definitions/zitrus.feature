Feature: Site Zitrus

    Background: Acesso ao Site
        Given Eu acesso o site da Zitrus

    Scenario: Validar acesso ao site da Zitrus
        Then Eu devo visualizar o logo da empresa

    
    Scenario Outline: Validar informações de obrigatóriedade do formulário de contato
        When Eu clico no botão de Contato
        And Preencho as informações "<nome>" "<email>" "<empresa>" "<cargo>" faltando campos obrigatórios
        And Eu clico em Enviar
        Then Eu devo visualizar a mensagem de campo obrigatório

        Examples:
            | nome | email                 | empresa       | cargo                 |
            |      | rangel-16@hotmail.com | Empresa Teste | Analista de Qualidade |


    Scenario Outline: Validar se todas as soluções do menu estão abrindo corretamente
        When Eu clicar na "<solucao>"
        Then Eu devo ser redirecionado para a página "<url>"

        Examples:
            | solucao              | url                   |
            | Gestão de Planos     | gestao-de-planos/     |
            | Atendimento          | atendimento/          |
            | Portais              | portais/              |
            | Ressarcimento ao SUS | ressarcimento-ao-sus/ |
            | CRM                  | crm/                  |
            | Taric                | taric/                |
            | Serviços             | servicos/             |
            | Zlabs                | zlabs/                |

    Scenario: Validar se está exibindo todas as soluções da Zitrus
        Then Eu devo visualizar todas as soluções da Zitrus
            | dataId  | solucao                             |
            | a6857cd | Gestão de Planos de Saúde           |
            | ffc7284 | Atendimento                         |
            | 02ce598 | Portal da Empresa e do Beneficiário |
            | 3f66535 | Ressarcimento ao SUS                |
            | 7d75750 | Gestão do Relacionamento            |
            | 746714f | Prontuário Eletrônico               |
            | d8eb502 | Serviços                            |
            | 1dbcd3a | Hub de Inovação                     |
