![Curseduca](https://curseduca.com/application/images/logo-250px.png)

# Teste de Dev FrontEnd

## Introdução
Este é um repositório utilizado para os testes em processos seletivos de desenvolvedores(as) front-end do [Curseduca](https://curseduca.com).

## Especificação
Criar um recurso simples de CRUD de postagens em um mural, similar ao existente em algumas redes sociais, consumindo uma API em JSON.

- Cadastro de postagem
    - Campos
        - **Título**: campo texto
        - **Categoria**: campo _select_
        - **Conteúdo**: campo com editor WYSIWYG
    - Ações
        - Agendar
            - Perguntar ao usuário para quando ele quer agendar a postagem desse conteúdo
        - Postar agora
- Listagem de postagens
    - Buscar as postagens na API e exibi-las para o usuário
    - Ter uma opção para apagar uma postagem
    - Criar sistema de filtragem
        - Por Autor
        - Por Categoria

## Instruções
- É **necessário** o uso de ReactJS e Redux
- É **permitido** o uso de outras bibliotecas que te auxiliem no desenvolvimento _(ex: consumo de API, componentes prontos de UI, editor WYSIWYG etc)_


- **O que estamos buscando?**
    - Alguma metodologia para definição e organização do seu código CSS
    - Alguma metodologia para definição e organização dos seus componentes
    - Estética agradável e layout responsivo
        - Tenha cuidado e refinamento para entregar uma _interface_ bonita _(se necessário, utilize UI toolkits prontas)_
    - Boa usabilidade
        - Pense na experiência do usuário e exiba mensagens de confirmação, erro e sucesso, indicadores de carregamento etc
    - As instruções de como rodar o projeto
        - Recebemos muitos testes sem instruções de como configurá-lo, não cometa esse erro! 
    - Estrutura, legibilidade e manutenibilidade do seu código
        - Organize-o de uma forma que facilite intervenções futuras _(ex: necessidade de adicionar novos campos, filtros, ações)_


- **O que nos impressionaria?**
    - Código escrito em TypeScript
    - Utilização de design patterns
    - Código _mobile-first_
    - Utilização de abordagens de acessibilidade
    - Componentização e extensibilidade dos componentes
        - Tenha em mente que alguns desses componentes poderiam ser reutilizados no resto de seu sistema


- **O que nós não gostaríamos de ver?**
    - Encontrar códigos não utilizados comentados em sua aplicação
    - Encontrar muitas dependências não utilizadas em sua aplicação

## API
### Instalação
Para rodar a API localmente, siga as instruções abaixo:

1. Faça o fork [deste repositório](https://github.com/curseduca/curseduca-frontend-react-test) e crie o seu projeto a partir dele
2. Clone seu próprio repositório
3. Inicie a instalação das dependências do projeto excutando `npm install`
    - Caso seja necessário, execute: `npm audit fix` _(o próprio npm irá te instruir a fazer isso)_
4. Se precisar alterar as informações padrões do servidor, copie o arquivo **.env.example** para **.env** e altere seus valores
    - O endereço padrão é: `http://localhost:3000`
5. Execute o comando `npm run serve` para rodar o servidor

### Uso
1. Busque um access token através do endpoint `GET /auth/login` informando o email e senha do usuário
    - Eles estão localizados em [src/Database/data/users.json](https://github.com/curseduca/curseduca-frontend-react-test/blob/master/src/Database/data/users.json)
2. Utilize o token em todas as requisições seguintes através do cabeçalho `Authorization: Bearer <TOKEN>`

### Endpoints 
- `GET /users`
- `GET /posts`
- `POST /posts`
- `DELETE /posts/<id>`
- `GET /categories`

## Como entrego meu teste?
Envie um email [vagas@curseduca.com](vagas@curseduca.com) com o link para seu repositório


## Execução
Basta: clonar o repositório; Instalar as dependências do diretório raiz e de dentro da pasta web; Executar o script `npm run serve`; E iniciar a aplicação com `npm start`
