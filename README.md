# Desafio - Restaurante

Nesse desafio estaremos pedindo algumas novas coisas que não requerimos no último desafio, mas não se preocupe estaremos os acompanhando no desenvolvimento.

Nesse projeto, além das bibliotecas já utilizadas `material-ui` e `axios`, estamos utilizando o [`eslint`](https://www.npmjs.com/package/eslint) para ter um código melhor e mais próximo do que usamos no dia a dia. 

### Instruções

- **User Interface:** Você deve [usar esse link](https://xd.adobe.com/spec/f6e71782-ebba-4573-6f7a-005a1a6d391f-80d6/) como referência de UI durante o desenvolvimento.
- **Entregáveis:** Você deve desenvolver na sua branch, que tem seu nome, e que pelo menos ao final do dia será necessário um `push` na sua branch. Para que seja fácil ver a evolução.
- **Como rodar a aplicação:** Instale as dependências com `npm i` e rode com `npm start`.
- **Como rodar a api:** É só rodar o comando `npm run api`.

### Desafio

- Consulte a API disponibilizada para buscar as informações.
- Crie uma tela para exibir a lista de restaurantes:
    - O usuário deve ser capaz de buscar por estabelecimento.
    - Indique se cada um deles está aberto ou fechado sem ser necessário recarregar ou reabrir a página.
    - Para cada restaurante, deve ser exibido os horários de funcionamento, as promoções ativas no momento e o cardápio.
    - O restaurante deve atualizar o status de aberto/fechado, de acordo com o horário de funcionamento, sem ser necessário recarregar ou reabrir a página.
- Crie uma tela para exibir os produto do cardápio de cada um dos restaurantes:
    - O usuário deve ser capaz de buscar os produtos. 
    - Para os produtos com promoção ativa, deve ser exibido o valor original e o valor promocional.
    - As promoções ativas e o valor promocional devem ser atualizados na interface, de acordo com o horário, sem a necessidade de recarregar ou reabrir a página.

##### Formato de horários
- É necessário tratar os campos que indicam horários de funcionamento. 
- Os campos `from` e `to` possuem o formato `HH:mm`. 
- Caso o campo `to` possua um horário anterior ao valor de `from`, deve-se considerar que o horário se estende até o horário contido em `to` do próximo dia. Por exemplo, se `from` for `19:00` e `to` for `02:00`, o horário a ser considerado é das 19h do dia atual até às 02h do dia seguinte.
- O campo `days` guarda os dias da semana em que o horário é válido. Sendo Domingo o valor 1 e Sábado o valor 7. Os horários possuem intervalo mínimo de 15 minutos.

### API que você deve consumir

http://localhost:5000 é o endereço onde está a api, se estiver rodando o comando `npm run api`.

**Examplos de consulta na API:**

- Busca de todos os restaurantes - http://localhost:4000/restaurantes

- Busca do restaurante específico - http://localhost:4000/restaurantes/1