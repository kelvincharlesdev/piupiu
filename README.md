<div align="center">
  <img src="https://git.raroacademy.com.br/uploads/-/system/appearance/logo/1/raroacademy.jpeg" alt="logo" width="70" height="auto" />
  <h1>Exercício Avaliativo PiuPiu</h1>
</div>



## Requisitos

- Eu COMO Elon Musk, gostaria de proteger todas as rotas do aplicativo para que apenas pessoas cadastradas tenham acesso

  - As páginas de login e signup devem ser públicas  OK
    - Usuarios logados tentando acessar essas rotas devem ser redirecionados para a home  OK
  - As rotas /home /:handle/\* /piu/:id só devem ser acessáveis por usuários logados OK
    - Quando o usuário acessar o seu próprio perfil, ele, e apenas ele, deve ser capaz de alterar sua imagem, descrição e nome OK
  - O token e demais informações do usuário devem ser salvos no local storage OK

- Eu COMO usuário gostaria de rotas para navegar pela aplicação e ver dados relevantes em cada uma delas

  - A rota /home deve exibir uma lista de posts e a possibilidade de criar um novo post 
  - A rota /:handle deve exibir os dados do usuário da handle especificada e, por padrão, os posts do usuário organizados em ordem decrescente de data de criação 
  - A rota /:handle/likes deve exibir os dados do usuário da handle especificada e a lista de posts curtidos pelo usuário em ordem decrescente de data de curtida 
  - A rota /piu/:id deve exibir a piada ( o post ) correspondente ao id além de todas as respostas a esse post, em ordem decrescente de data de criação 
  - Rotas incorretas ou não existentes devem redirecionar o usuário para /home 

- Eu COMO usuário gostaria que as páginas exibissem o conteúdo relativo e que minhas modificações fossem persistidas e enviadas para os demais usuários

  - A página principal exibir os posts em ordem decrescente. Os dados exibidos devem ser revalidados a cada, pelo menos, 20 segundos ( não coloquem mais que 15s porque não sei se meu back aguenta 😑 ) 
    - Os posts da página principal serão paginados e com ‘scroll infinito’ 
    - Se o usuário NÃO estiver visualizando o topo da página ( o post mais recente ), o botão de refresh deve ser exibido, mostrando as imagens dos usuários que fizeram os posts mais recentes
    - Se o usuário estiver visualizando o topo da página, os novos dados devem ser exibidos imediatamente
    - Mudanças nos posts que já existem na página devem ser aplicadas SEMPRE, independente da posição do scroll do usuário
  - A página principal deve exibir os últimos usuários cadastrados e deve ser atualizado a cada, pelo menos, 5 minutos ( Mesma coisa, vamos brincar nessa casa de tempo pra não derrubar meu back ) 
  - As páginas de usuários deverão exibir todos os posts ou todos as curtidas do usuário especificado na rota, seguindo as regras dadas na história de rotas.
    - Os dados das páginas de usuários NÃO serão paginados 
  - As páginas dos pius ( posts ) deverão exibir as informações relativas ao post especificado pelo id na rota e TODAS as suas respostas
    - As respostas NÃO serão paginadas 


## ⚙ **Funcionalidades**

  ### Configurações de API
    - Fiz todas as chamadas na api de acordo com o swagger e você encontra todas em service

  ### Configuração de Rotas

    - Configurei todas as rotas existentes 
    - Separei por rotas que o usuário precisava estar autenticado e quais eram livres

  #### SignUp e Login
    - Login
      - Foi feita a comunicação com a API para quando o usuário logar enviar seu token e user e salvar no locallStorage

      - Foi feita a comunicação com a API para quando o usuario criar um cadastro salvar o cadastro feito no banco de dados 

  ### Contexto
    - Contexto de autenticação foi criado , pois usei para verificar se o usuário estava autenticado em algumas rotas e para salvar as informações em um estado de user global


  ### Home

  #### Sidebar

    - Aqui usei meu contexto, chamada na api e implementei funcionalidades !

  #### Home
    - Aqui usei para implementar as funcionades:
      - Novo Piu
      - Notificação de novo Piu caso o usuário esteja com scroll fora do topo
      - Lista de Pius 
      - Lista de Pius atualiza a cada 20s
      - Paginação e Scroll infinito com  com useInfiniteQuery

  #### SilglePiupiu
    
    - Aqui fiz as funcionalidades das funções 
      - getReplies
      - handleSubmit
    - Nessas funções fiz a chamada na API para buscar as informações de um piu único e tambem comentar alguma postagem 
    

  ### MainLayout

    - Aqui fiz a chamada para pegar os últimos 3 usuários cadastrados a cada 5 minutos 

  ### Profile

    - Em profile fiz usei useQuery e useParams para fazer a chamada na API e passar as informações para PiupiuList

  ### ProfileLayout

    - Em ProfileLayout usei :
      - useParams
      - useQuery
      - useAuthContext (meu contexto)
    - Fiz chamada na API usando também Patch para consegui alterar os dados do usuário
    - Fiz também uma validação para apenas o usuário dono do perfil conseguir alterar os dados de nome , img , descrição


## 😰 Desafios

      . Leitura de código pronto 
      . Identificar e entender o que cada coisa faz
      . Identificar onde deveria fazer as mudanças e aplicas
      . Manipulação de rotas  
      . Gitflow  


## 🤖 Executando o projeto localmente
## Projeto iniciado usando Create React App.

- Clone o projeto com

> git clone https://git.raroacademy.com.br/kelvin.cruz/projeto-pratica-semana-06-gofinance.git

- Vá para a raiz do diretório

> cd projeto-pratica-semana-06-gofinance

- Instale as dependências

> npm install

- Inicie o servidor local

  > npm run dev

- Analisar erros padrões com ESLint

> npm run lint


## 👩‍💻 **Devs**

<table align="center">
    <tr>  
            <td align="center">
            <div>
                <img src="https://media.licdn.com/dms/image/C4E03AQEBkd6yTbS1XA/profile-displayphoto-shrink_800_800/0/1516771503526?e=1700092800&v=beta&t=mWKvL2Qv6RZ5n8XwyqkPlwEsfQ7hsvCoDi0w7JWFb3Y" width="120px;" alt="Foto de Jean no GitHub"/><br>
                <b> Dev Criador <br> Lucas G. Temponi Soares </b><br>
                <a href="https://www.linkedin.com/in/lucastemponi/" alt="Linkedin"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" height="20"></a>
                <a href="https://github.com/LucasTemponi" alt="GitHub"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" height="20"></a>
            </div>
        </td>
        <td align="center">
            <div>
                <img src="https://avatars.githubusercontent.com/u/110488969?v=4"width="120px;" alt="Foto de Kelvin no GitHub"/><br>
                    <b> Dev <br> Kelvin Charles </b><br>
                        <a href="https://www.linkedin.com/in/kelvin-charles/" alt="Linkedin"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" height="20"></a>
                        <a href="https://github.com/kelvincharlesdev" alt="GitHub"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" height="20"></a>
            </div>
        </td>
    </tr>
</table>



<!-- ## Configurações de Api

- Configurado todas chamadas de api em service

## Home 

- SideBar :  SessionController {Busquei os dados do usuario tais como img, handle e foto e setei parar aparecer} {em Option criei uma função de logout para deslogar o usuario sempre que ele clica em sair ou trocar conta}
  - SessionControllerProps {Passei como props a função e o user }


- Home/pius
    - Implementada função apiRequestGetList para pegar os pius no backend usando o token para verificar se o usuario esta autenticado
    - Implementado useEffect com função piusData para paginar e setar os pius na telas 
    - Implementado dois estados novos :
        - [isloading, setIsLoading] para definir o carregamento da pagina
        - [currentPage, setCurrentPage] define o estado da paginação


- Home/piu
    - Implementada a função na api apiRequestGetPosts para mandar novo piu para o banco de dados 
    - Em home implementei a função newPiuPiu para chamar a apiRequestGetPosts e limpar o campo de busca apos clicar em piu 


- MainLayout
    - Implementa chamada api de novas pessoas com o arquivo apiRequestGetLatestUsers
    - Implementa primeira interação com React Query
    - Implementa função apra buscar os ultimos 3 usuarios cadastrados e is loading com use query dentro de MainLayout

- Home 
  -Implementei rota de following/stalking em Routes


- Profile 
  - Implementa routas de profile
  - Implementa funções de requisição de api 
      - apiRequestGetUser (função para rota de profile)
      - apiRequestGetUserPostsLikes (função para alternar entre rotas de posts ou profile)
  - Implementa useQuery para buscar informações de profile
  - Implementa useQuery para buscar informações de Posts e Likes e alternar as rotas entre eles 
  - Implementa rotas de perfil e curtidas
  - Implementa estado para puxar informaçoes de usuario
  - Implementa funcionalidade de mostar botão de editar perfil apenas para o usuário do proprio perfil , pros demais o botão é escondido
  - Implementa funcionalidade de editar perfil -->