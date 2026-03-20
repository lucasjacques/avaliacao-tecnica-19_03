# 📄 Tipos de Testes e Documentação

## 🧪 1. Teste Funcional

### 📌 Definição

Teste funcional valida se as funcionalidades do sistema estão
funcionando de acordo com os requisitos esperados. Ele foca no
comportamento da aplicação, sem se preocupar com implementação interna.

### ✅ Exemplo no BugBank

-   Criar uma conta com dados válidos → deve ser criada com sucesso
-   Realizar login com credenciais corretas → deve autenticar o usuário
-   Transferir saldo entre contas → o valor deve ser debitado de uma
    conta e creditado na outra

### 🧠 Quando aplicar

-   Sempre que uma nova funcionalidade é desenvolvida
-   Durante testes exploratórios
-   Antes de entregar uma feature

------------------------------------------------------------------------

## 🔁 2. Teste de Regressão

### 📌 Definição

Teste de regressão garante que alterações recentes não quebraram
funcionalidades já existentes.

### ✅ Exemplo no BugBank

Após uma alteração na funcionalidade de transferência: - Validar que
ainda é possível: - Criar conta
- Fazer login
- Visualizar saldo
- Garantir que transferências antigas continuam funcionando corretamente

### 🧠 Quando aplicar

-   Antes de releases (deploy em produção)
-   Após correção de bugs
-   Após novas features

------------------------------------------------------------------------

## 🔗 3. Teste de Integração

### 📌 Definição

Teste de integração valida a comunicação entre diferentes partes do
sistema (ex: frontend + backend, APIs, banco de dados).

### ✅ Exemplo no BugBank

-   Ao realizar login:
    -   Frontend envia dados → API autentica → banco valida credenciais
-   Transferência:
    -   Sistema deve atualizar corretamente o saldo nas duas contas no
        banco

### 🧠 Quando aplicar

-   Quando há comunicação entre serviços/módulos
-   Após mudanças em APIs ou banco de dados
-   Em sistemas distribuídos

------------------------------------------------------------------------

## ⚡ 4. Teste de Performance

### 📌 Definição

Teste de performance avalia como o sistema se comporta sob carga,
medindo velocidade, estabilidade e escalabilidade.

### ✅ Exemplo no BugBank

-   Simular múltiplos usuários realizando login ao mesmo tempo
-   Testar várias transferências simultâneas
-   Verificar tempo de resposta da aplicação

### 🧠 Quando aplicar

-   Antes de grandes releases
-   Em sistemas com muitos usuários simultâneos
-   Para identificar gargalos de performance

------------------------------------------------------------------------

## 📊 Conclusão

* Durante os testes no BugBank, é possível observar que diferentes tipos de teste atendem a objetivos complementares dentro da estratégia de qualidade.
* Os testes funcionais são essenciais para validar os fluxos principais do sistema, como criação de conta, login e transferências, que representam o core do produto.
* Já os testes de regressão se tornam críticos após alterações nessas funcionalidades, garantindo que mudanças não impactem negativamente comportamentos já validados — especialmente em fluxos financeiros, onde erros podem gerar inconsistência de saldo.
* Os testes de integração são importantes para assegurar a consistência entre frontend, APIs e banco de dados, principalmente em operações sensíveis como transferências entre contas.
* Por fim, testes de performance ajudam a identificar limitações do sistema sob carga, o que é relevante em cenários com múltiplos usuários simultâneos realizando operações financeiras.
* Dessa forma, a aplicação combinada desses testes contribui para maior Estabilidade, Segurança e Confiabilidade  do BugBank.
