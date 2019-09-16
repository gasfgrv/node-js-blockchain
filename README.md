# Blockchain com Node.js <!-- omit in toc -->

- [Blockchain](#blockchain)
    - [O que é Blockchain?](#o-que-%c3%a9-blockchain)
    - [Conceitos Essenciais](#conceitos-essenciais)
    - [Princípios](#princ%c3%adpios)
    - [Qualidades](#qualidades)
    - [Inovações](#inova%c3%a7%c3%b5es)
- [Node.js](#nodejs)
    - [O que é Node.js?](#o-que-%c3%a9-nodejs)
    - [Execução single-thread](#execu%c3%a7%c3%a3o-single-thread)
- [Fontes](#fontes)

## Blockchain
#### O que é Blockchain?
Relativo ao blockchain pode ser considerada como uma estrutura de dados (organização e manipulação de dados de forma eficiente), no qual armazena os dados em blocos encadeados (de onde vem o nome), visando a imutabilidade, distribuindo os dados em uma rede distribuída, ou seja, a informação se encontra copiada e disponível para qualquer um na rede, assegurando assim a confiabilidade do conteúdo - caso um integrante perca o dado, a rede pode disponibilizar uma nova cópia para o mesmo, e, caso algum dado seja alterado o mesmo será comparado ao mesmo dado disponível nos demais nós (pontos da rede), assegurando assim sua autenticidade e a uniformidade da informação-, diferentemente de redes centralizadas, a confiança das informações não está atrelada a um órgão centralizado no qual define e distribui para os demais.

A notoriedade dessa tecnologia inicia-se em 2008, escrito sob o pseudônimo de Satoshi Nakamoto, o relatório Bitcoin: um sistema financeiro eletrônico peer-to-peer (do original,  Bitcoin: A Peer-to-Peer Eletronic Cash System), gerou interesse ao apresentar uma solução para pagamentos eletrônicos sem a necessidade de confiar em um órgão centralizado, mas sim de uma prova criptográfica para a validação de transações financeiras. Desde então, essa tecnologia serviu como base da bitcoin, servindo como uma forma de registrar as transações, KATORI (2017) descreve que as operações e  transações  são registradas, após a criação da primeira entrada, seguindo uma ordem cronológica, mas antes precisam ser validadas, criando assim, um elo com a transação (ou bloco) anterior. Conforme PRADO (2017) o blockchain serve como uma solução para que uma pessoa não gaste o mesmo Bitcoin duas vezes ou afirmar que enviou 10 Bitcoins mas ter transferido apenas 0,1 Bitcoin.

#### Conceitos Essenciais

Para entender o seu funcionamento, deve-se ter conhecimento de alguns conceitos essenciais de tecnologias usadas, PIRES (2016) os descreve como:

- **Criptografia de chave pública:** também conhecido como criptografia assimétrica, faz uso de duas chaves chaves criptográficas (algoritmo que transforma o texto puro em texto cifrado), uma pública - aberta para todos que queiram enviar uma mensagem ou verificar a autenticidade da mensagem -, para criptografar e uma privada - mantida em segredo e qualquer um que possuir a mesma poderá decodificar ou atestar a autenticidade da mensagem por meio de uma assinatura digital -, para descriptografar a mensagem.

- **Função de Hash:** é uma função matemática em que a entrada pode ser uma sequência de caracteres de qualquer tamanho e sua saída deve ser uma sequência de caracteres com um tamanho fixo, e conforme a notação de Big O sua eficiência deve ser O(n). Já um hash criptográfico deve possui mais duas características: ser resistentes a colisões (reduzir a probabilidade de que duas entradas possuam uma mesma saída) e ser anti-reversão (não se pode descobrir a entrada x a partir da saída da hash h(x)). A partir de uma função de hash pode é gerada a assinatura digital do bloco. Uma das principais aplicações do hash no blockchain é a criação de árvores de Merkle, ou  árvores binárias de hash, em que árvore é construída das folhas para a raiz, e o hash é realizado por pares. Caso o número de folhas seja ímpar, a última folha será duplicada e “hasheada” consigo.

- **Assinatura Digital:** é a aplicação no meio digital os princípios de uma assinatura convencional. Existem duas propriedades essenciais para uma assinatura: qualquer pessoa pode saber quem fez a assinatura, mas só o autor sabe como fazer a assinatura (autenticidade) e a assinatura deve estar vinculada a única e exclusivamente a um documento (endosso). Essas duas propriedades têm o intuito de que nenhuma assinatura possa ser forjada e nem utilizada em outro documento.

- **Redes P2P:** é um modelo que se opõe ao modelo tradicional de cliente-servidor, utilizando-se de uma rede distribuída em que cada máquina, chamada de nó, executam funções de requisitar (cliente) e enviar (servidor) serviços. Esse tipo de rede não necessita de uma entidade de controle, então, caso uma máquina seja desconectada a rede ainda assim continuaria funcionando, enquanto em uma rede cliente-servidor, se o servidor for desconectado a rede ficará inutilizada. Por ser descentralizada, as informações podem para diversas máquinas interconectadas, o que torna praticamente que apagar ou alterar os registros, dando assim uma maior transparência.

#### Princípios

ROMAN (2018 apud TAPSCOTT & TAPSCOTT, 2017)  aponta os cinco principais princípios do blockchain:

- **Banco de dados distribuído:** cada parte tem um acesso ao banco de dados e seu histórico. Não há controle das informações por uma das partes. Não há intermediário para que uma das partes possa verificar os registros;

- **Transmissão peer-to-peer:** Não existe um nó central, cada nó armazena e envia informações para os demais;
Transparência com o pseudônimo: toda transação é visível para todos. Cada nó possui um endereço, e as transações ocorrem entre endereços. Os usuários podem optar por manter-se no anonimato;

- **Irreversibilidade dos registros:** Os registros não podem ser alterados após validada a transação e as contas são atualizadas, pois os mesmo se encontram atrelados aos registros anteriores. Para isso, existem algoritmos e abordagens computacionais que são implantadas com o objetivo de garantir que a gravação no banco de dados seja permanente, ordenada e disponível para todos;

- **Lógica computacional:** as transações podem ser vinculadas à lógica computacional, sendo assim programáveis, em que pode ser criados algoritmos e regras para a transação entre nós, ou smart contracts.

#### Qualidades

Conforme KATORI (2017 apud TAPSCOTT & TAPSCOTT, 2017) principais qualidades do blockchain são:

- Ser descentralizado, pois não depende de nenhum intermediário;

- Possuir dados altamente criptografados, garantindo a segurança dos mesmos;

- Possuir código aberto, e não precisar de uma organização para validar qualquer alteração;

- Utilizar tecnologias acessíveis;

- Os registros não podem ser alterados;

- Registrar todas as transações já feitas, caso altere uma transação, todas as posteriores também serão.

#### Inovações

Para GUPTA (2017) o surgimento do blockchain, trouxe cinco grandes inovações, sendo elas:

- A primeira é a bitcoin, uma forma de transferir valores entre pessoas sem precisar de intermediários;

- A segunda foi a percepção que o blockchain poderia sobreviver sem estar intrinsecamente ligado à criptomoeda, podendo ser 
aplicado em mais áreas.

- A terceira são os smart contracts, permitindo que os demais produtos financeiros passassem a ser representados nas transações e não só dinheiro.

- A quarta é a proof of stake (prova de participação), que diferentemente da prova de trabalho “usa um sorteio aleatório para decidir quem será o criador do próximo bloco (CRUZ, 2017)”.

- A última é chamada de blockchain scaling, que visa acelerar o processo de validação dos blocos, verificando quantos nós são necessários e distribuindo o trabalho de forma eficiente, sem que a segurança seja afetada.

## Node.js

#### O que é Node.js?

O Node.js é um ambiente de execução para JavaScript, assíncrono e orientado a eventos de código aberto. O Node.js permite que os desenvolvedores usem JavaScript para escrever scripts do lado do servidor.

O Node.js pode ser considerado como um ambiente de execução Javascript server-side, ou seja, com ele pode se criar aplicações Javascript para rodar como uma aplicação standalone em uma máquina, não dependendo de um browser para a execução.

O principal motivo de sua adoção é a sua escalabilidade, além de sua arquitetura, flexibilidade e baixo custo, o tornam uma boa escolha para implementação de Microsserviços e componentes da arquitetura Serverless.

#### Execução single-thread

Sua principal característica consiste em sua execução single-thread (uma uníca thread é responsável por executar o código da aplicação) enquanto em outras tecnologias como PHP, Java, C# a execução é multi-thread.

Na prática, um servidor web utilizando linguagens tradicionais, cada requisição recebida, uma nova thread é criada para tratar a mesma. Para a criação de cada thread serão demandados recursos computacionais. Sendo esses recursos limitados, as threads não serão criadas infinitamente, e quando atinge-se o limite, haverá uma fila de espera para que cada nova requisição possa ser tratada após a liberação de recursos.

Já com a filosofia do Node.js, em que uma uníca thread é responsável pelo tratamento das requisições. A thread em questão é chamada de Event-loop, atribui-se o nome pois cada requisição é tratada como um evento, então o Event Loop fica em execução esperando novos eventos para tratar, e para cada requisição, um novo evento é criado.

>  No servidor Node.js, o Event Loop é a única thread que trata as requisições, enquanto que no modelo tradicional uma nova thread é criada para cada requisição. Enquanto o Event Loop delega uma operação de E/S para uma thread do sistema de forma assíncrona e continua tratando as outras requisições que aparecerem em sua pilha de eventos, as threads do modelo tradicional esperam a conclusão das operações de E/S, consumindo recursos computacionais durante todo esse período de espera.

Apesar de ser single-threaded, é possível tratar requisições concorrentes em um servidor Node.js. Enquanto o servidor tradicional utiliza o sistema multi-thread para tratar requisições concorrentes, o Node.js consegue o mesmo efeito através de chamadas de E/S (entrada e saída) não-bloqueantes. Isso significa que as operações de entrada e saída (ex: acesso a banco de dados e leitura de arquivos do sistema) são assíncronas e não bloqueiam a thread. Diferentemente dos servidores tradicionais, a thread não fica esperando que essas operações sejam concluídas para continuar sua execução.

Sua arquitetura possibilita um número maior de requisições concorrentes sejam tratadas em comparação com o modelo tradicional, que é limitado devido ao alto consumo computacional pela criação e manutenção de threads a cada requisição.

## Fontes

1. CRUZ, Eduardo. Formas de Mineração e Diferença entre: PoW, PoS, PoC. Medium, 11 de outubro de 2017. Disponível em: https://medium.com/@eduardo.domc/formas-de-minera%C3%A7%C3%A3o-e-diferen%C3%A7a-entre-pow-pos-poc-22a3881195b5. Acesso em: 15 de setembro de 2019.

2. GUPTA, Vinay. Uma breve história sobre a Blockchain. Harvard Business Review, 31 de maio de 2017. Disponível em: https://hbrbr.uol.com.br/uma-breve-historia-sobre-blockchain/. Acesso em: 15 de setembro de 2019.

3. KATORI, Fernanda Yumi. Impactos das Fintechs e do Blockchain no sistema financeiro: uma análise crítico-reflexiva. 2017. 33 f., il. Trabalho de Conclusão de Curso (Bacharelado em Ciências Contábeis)—Universidade de Brasília, Brasília, 2017. Acesso em: 15 de setembro de 2019.

4. LENON. Node.js - O que é, como funciona e quais as vantagens. Opus Software. Disponível em: <https://www.opus-software.com.br/node-js/>. Acesso em: 15 de setembro de 2019.

5. LIMA, Matheus. Como implementar o Blockchain em JavaScript com menos de 80 linhas. Medium. Disponível em: <https://medium.com/tableless/como-implementar-o-blockchain-em-javascript-com-menos-de-80-linhas-c2ff4852ee13>. Acesso em: 15 de setembro de 2019.

6. PIRES, Timoteo Pimenta. Tecnologia Blockchain e suas aplicações para provimento de transparência em transações eletrônicas. 2016. 57 f., il. Trabalho de conclusão de curso (Bacharelado em Engenharia de Redes de Comunicação)—Universidade de Brasília, Brasília, 2016. Acesso em: 15 de setembro de 2019.

7. ROMAN, Denys. Como as blockchains podem ser utilizadas para gerar maior confiança na asseguração de dados ambientais, sociais e de governança corporativa. 2018. Tese de Doutorado. Acesso em: 15 de setembro de 2019.

8. TAPSCOTT, Alex; TAPSCOTT, Don. How blockchain is changing finance. Harvard Business Review, v. 1, n. 9, 2017. Acesso em: 15 de setembro de 2019.