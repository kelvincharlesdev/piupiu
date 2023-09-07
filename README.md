- Eu COMO Elon Musk, gostaria de proteger todas as rotas do aplicativo para que apenas pessoas cadastradas tenham acesso

  - As páginas de login e signup devem ser públicas
    - Usuarios logados tentando acessar essas rotas devem ser redirecionados para a home
  - As rotas /home /:handle/\* /piu/:id só devem ser acessáveis por usuários logados
    - Quando o usuário acessar o seu próprio perfil, ele, e apenas ele, deve ser capaz de alterar sua imagem, descrição e nome
  - O token e demais informações do usuário devem ser salvos no local storage

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





## Configurações de Api

- Configurado post em api quando o usuario entra com senha e email corretamente 

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