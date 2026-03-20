# Documentação
Observação: Para realizar as Requisições GET, utilizei o [BrasilAPI](https://brasilapi.com.br/), mas como ele não aceita requisições do tipo POST nem PUT, utilizei o [JSONPlaceholder](https://jsonplaceholder.typicode.com/) 

## GETs (via BrasilAPI)
### GET - Retrieve Address by CEP - Success
#### Descrição
Esta requisição valida o endpoint da BrasilAPI responsável por retornar informações de endereço a partir de um CEP. É realizada uma requisição do tipo GET utilizando um CEP válido e conhecido (880104000), com o objetivo de garantir que a API esteja disponível, processe corretamente a entrada e retorne os dados esperados. O foco deste teste é validar o funcionamento básico do serviço em um cenário de sucesso.

#### Validações de Resposta Relizadas
A validação da resposta é feita em três níveis. Primeiramente, o status code é verificado para garantir que a requisição foi processada com sucesso (esperado 200 OK). Em seguida, os headers são validados, assegurando que o Content-Type da resposta indica o formato JSON. Por fim, o body da resposta é validado em dois aspectos: a presença dos campos obrigatórios (como cep, city e state) e a consistência dos dados, confirmando que o CEP retornado corresponde exatamente ao CEP enviado na requisição.
### GET - Retrieve Address by CEP - Failed
#### Descrição
Esta requisição valida o endpoint da BrasilAPI responsável por retornar informações de endereço a partir de um CEP. É realizada uma requisição do tipo GET utilizando um CEP inválido (8801040000), com o objetivo de garantir que a API esteja disponível, processe corretamente a entrada e retorne o erro esperado. O foco deste teste é validar o funcionamento básico do serviço em um cenário de falha.

#### Validações de Resposta Relizadas
A validação da resposta é feita em três níveis. Primeiramente, o status code é verificado para garantir que a requisição foi processada com sucesso (esperado 400 Bad Request). Em seguida, os headers são validados, assegurando que o Content-Type da resposta indica o formato JSON. Por fim, o body da resposta é validado em dois aspectos: a presença dos campos obrigatórios (como message, type, name e errors).
## POSTs (via JSONPlaceholder)
### POST - Create a Post - Success
#### Descrição
Esta requisição valida o endpoint de criação de posts da JSONPlaceholder por meio de uma chamada POST para /posts. No teste, é enviado um payload contendo title, body e userId, simulando a criação de um novo post. O objetivo é verificar se a API aceita corretamente os dados enviados e retorna uma resposta coerente com a operação de criação.
#### Validações de Resposta Relizadas
A validação da resposta é realizada em três níveis. O status code é verificado para garantir que a criação foi bem-sucedida (esperado 201 Created). Nos headers, é validada a presença do campo Location, assegurando que a resposta indica o recurso criado (mesmo considerando que a API utilizada é mock e não segue totalmente o padrão REST). Por fim, o body da resposta é validado garantindo que os dados retornados correspondem aos enviados na requisição, confirmando a integridade e consistência da operação.
### POST - Create a Post with Minimal Params - Success
#### Descrição
Esta requisição valida o endpoint de criação de posts da JSONPlaceholder por meio de uma chamada POST para /posts. No teste, é enviado um payload contendo nenhum paramêtro, simulando a criação de um novo post com o mínimo de informação necessário. O objetivo é verificar se a API suporta corretamente não enviar nenhum parâmetro e retorna uma resposta coerente com a operação de criação.
#### Validações de Resposta Relizadas
A validação da resposta é realizada em três níveis. O status code é verificado para garantir que a criação foi bem-sucedida (esperado 201 Created). Nos headers, é validada a presença do campo Location, assegurando que a resposta indica o recurso criado (mesmo considerando que a API utilizada é mock e não segue totalmente o padrão REST). Por fim, o body da resposta é validado garantindo que os dados retornados correspondem aos enviados na requisição, confirmando a integridade e consistência da operação.
## PUTs (via JSONPlaceholder)
### PUT - Update a Post - Success
#### Descrição
Esta requisição valida o endpoint de atualização de recursos da JSONPlaceholder por meio de uma chamada PUT para /posts/{{postId}}, utilizando um ID válido (observado, por amostragem, que funciona com valores de 1 a 100). O objetivo é simular a atualização de um post existente, enviando um payload com o campos a ser modificado (nesse, caso "title"), garantindo que a API processa corretamente a alteração de um recurso previamente existente.
#### Validações de Resposta Relizadas
A validação da resposta é realizada em três níveis. O status code é verificado para garantir que a atualização foi bem-sucedida (esperado 200 OK). Nos headers, é validado que o Content-Type da resposta está no formato JSON. Por fim, o body da resposta é validado assegurando que os dados retornados refletem corretamente os valores enviados na requisição, sendo nesse exemplo somente retornado o id, garantindo consistência e integridade da operação.
### PUT - Update a Post with Invalid Id - Failed
#### Descrição
Esta requisição valida o comportamento da API ao tentar atualizar um recurso com um ID inválido (ex: 101), que não existe na base da JSONPlaceholder. O objetivo é simular um cenário negativo, verificando como o sistema se comporta diante de uma tentativa de atualização de um recurso inexistente, evidenciando limitações da API mock utilizada.
#### Validações de Resposta Relizadas
A validação da resposta também é feita em três níveis. O status code é verificado para garantir que a API retorna um erro (esperado 500 Internal Server Error). Nos headers, é validado que o Content-Type da resposta indica HTML, refletindo um erro interno do servidor. Por fim, o body da resposta é validado de forma genérica, assegurando que não está vazio e que contém indícios de erro, sem acoplamento a mensagens específicas, mantendo o teste mais robusto e menos dependente de detalhes internos da implementação.