# Garde Appointment — Frontend

Interface web desenvolvida para um sistema de agendamento de consultas, permitindo ao usuário selecionar uma data, visualizar os horários disponíveis e realizar um novo agendamento.

O frontend foi desenvolvido como parte de um desafio técnico, integrando-se a uma API REST responsável pelas regras de negócio, validação dos horários e persistência dos agendamentos.

## Funcionalidades

- Seleção de data para consulta
- Consulta de horários disponíveis
- Seleção de horário
- Criação de agendamento
- Exibição da confirmação do agendamento
- Tratamento de horários ocupados
- Tratamento de dias sem atendimento
- Integração com a API REST do backend
- Interface responsiva

## Fluxo da aplicação

```text
Usuário
   ↓
Seleciona uma data
   ↓
Frontend consulta a API
   ↓
Backend valida o dia e os horários disponíveis
   ↓
Frontend exibe os horários
   ↓
Usuário seleciona um horário
   ↓
Frontend envia o agendamento
   ↓
Backend salva no banco de dados
   ↓
Frontend exibe a confirmação