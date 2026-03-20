# Relatório de Testes Funcionais/Exploratórios
## Criação de Conta
### Bugs
1. Ao não preencher o campo Nome, não é mostrado que "É campo obrigatório", quando deveria conforme citado na Tela de Requisitos. A sugestão de correção seria adicionar o "É campo obrigatório" nesse campo
    * Dificuldade de Implementação: Baixa (somente frontend)
    * Prioridade: Média para Alta (inconsistência no sistema que pode gerar confusão e o ROI da mesma é alto por ser simples)
    * Evidência do Problema
        <img src="assets\criacao_de_conta\bugs\bug1\evidencia_do_problema.png" alt="Criação de Conta - Bug 1: Evidência do Problema">
    * Referência (Tela de Requisitos)
        <img src="assets\criacao_de_conta\bugs\bug1\referencia_requisitos.png" alt="Criação de Conta - Bug 1: Referência">
    * Exemplo de Sugestão de Correção (feito localmente)
        <img src="assets\criacao_de_conta\bugs\bug1\sugestao_de_solucao.png" alt="Criação de Conta - Bug 1: Sugestão de Correção">
2. Clicar na área do "pin" do componente de Switch não realiza a ação esperada. A sugestão seria utilizar também essa área para realizar a ação
    * Prioridade: Minor
    * Evidência do Problema
        <video controls>
        <source src="assets\criacao_de_conta\bugs\bug2\evidencia_do_problema.mp4" type="video/mp4">
        Seu browser não suporta a tag de video
        </video>
    * Exemplo de lib que apresenta esse problema corrigido (Material UI em React): https://mui.com/material-ui/react-switch/
3. Na tela de Cadastro, há um erro textual: o campo "Confirmação senha" deveria ser "Confirmação da senha", mantendo a consistência com o placeholder da aplicação ("Informe a **confirmação da senha**")
    * Evidência do Problema
        <img src="assets\criacao_de_conta\bugs\bug3\evidencia_do_problema.png" alt="Criação de Conta - Bug 3: Evidência do Problema">
4. Ao criar a conta, o número da conta digital do usuário é mostrado, reunir com o time para entender se isso não representa uma brecha de segurança para o usuário e alinhar com o P.O. para revisar se há alguma regra de negócio que faz essa mensagem ser necessária
    * Prioridade: Alta (pode comprometer a segurança do usuário)
    * Evidência do Problema
    <img src="assets\criacao_de_conta\bugs\bug4\evidencia_do_problema.png" alt="Criação de Conta - Bug 4: Evidência do Problema">
5. Após criar a conta, o usuário não é redirecionado para a home, quando deveria conforme citado na Tela de Requisitos.
    * Prioridade: Alta (não cumpre requisitos)
    * Evidência do Problema:
        <video controls>
        <source src="assets\criacao_de_conta\bugs\bug5\evidencia_do_problema.mp4" type="video/mp4">
        Seu browser não suporta a tag de video
        </video>
    * Referência (Tela de Requisitos)
        <img src="assets\criacao_de_conta\bugs\bug5\referencia_requisitos.png" alt="Criação de Conta - Bug 5: Referência">
6. É possível criar múltiplas contas com o mesmo email (e até a mesma senha!). Solução sugerida: apresentar uma tela de erro caso o usuário tente cadastrar com um email ja cadastrado no sistema
    * Prioridade: Crítica (compromete a Integridade, Confidencialidade e Autenticidade da aplicação)
    * Evidência do Problema:
        <video controls>
        <source src="assets\criacao_de_conta\bugs\bug6\evidencia_do_problema.mp4" type="video/mp4">
        Seu browser não suporta a tag de video
    </video>

## Login
### Bugs
### Melhorias
1. Padronizar a interface de Acessar/Registrar
    * Dificuldade de Implementação: baixa (somente frontend)
    * Prioridade: média para baixa
    * Foi observado que os botões de "Acessar" e "Registrar" estão em posições trocadas quando comparados com Big Techs, como Google e Spotify (referencias abaixo). A sugestão de correção seria trocar os dois botões de lugar, ficando o "Registrar" na esquerda e o "Acessar" a direita.
    * Por que seguir as Big Techs?
        * Em um dos artigos da renomada consultoria e pesquisa especializada em UX Nielsen Norman Group, ela explica em "4. Consistência e Padrões - Usuários não deveriam ter que ponderar se diferentes palavras, situações ou ações significam a mesma coisa. Seguir convenções de plataformas e da indústia é recomendado"
        Fonte: https://www.nngroup.com/articles/ten-usability-heuristics/
    * Evidência do Problema
        <img src="assets\login\melhorias\melhoria1\evidencia_do_problema.png" alt="Login - Melhoria 1: Evidência do Problema">
    * Referências
        * Google
            <img src="assets\login\melhorias\melhoria1\referencia_google.png" alt="Login - Melhoria 1: Referência Google">
        * Spotify
            <img src="assets\login\melhorias\melhoria1\referencia_spotify.png" alt="Login - Melhoria 1: Referência Spotify">
## Transferência de valores entre contas
### Bugs
1. Ao não preencher o campo "Valor da Transferência" a seguinte mensagem de erro é apresentado na validação desse campo: "transferValue must be a `number` type, but the final value was: `NaN` (cast from the value `""`)." o que aparenta ser uma falta de tratativa no código, estourando um erro de uma lib.
    * Evidência do Problema:
    <img src="assets\transferencia_entre_contas\bugs\bug1\evidencia_do_problema.png" alt="Transferência entre contas - Bug 1: Evidência do Problema">~
    
    * Possível Solução:
        * Após fazer uma pesquisa breve, aparentemente esse erro é comum ao utilizar a lib Yup. Encontrei uma solução no StackOverflow que pode resolver o problema, resumidamente seria utilizar o método `.typeError()`. Fonte:  https://stackoverflow.com/questions/58770630/yup-when-nan-cast-from-the-value-nan
        * EDIT: Baixei o repositório da bugbank-ui e encontrei a possível linha do código que apresenta o problema:
        <img src="assets\transferencia_entre_contas\bugs\bug1\possivel_causa_codigo.png" alt="Transferência entre contas - Bug 1: Possível Causa - Código">
            * Explicando: o if da linha 78 do arquivo "src\components\FormTransfer\index.tsx" só verifica se `transferValue < 0` ou `transferValue === 0`, talvez adicionar mais um ou `transferValue === ""` já resolva o problema, ou parte dele. Então, essa linha ficaria assim: 
            *`     if (transferValue < 0 || transferValue === 0 || transferValue === "") {`
            * Não cheguei a rodar o projeto, então pode ser que na tela inicial já apresente essa validação, o que não é muito legal, mas daí deixo com os mestres do time de desenvolvimento haha