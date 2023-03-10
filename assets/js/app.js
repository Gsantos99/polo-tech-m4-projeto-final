function redirectPage() {
  const root = document.querySelector('#root')

  const Router = {
    '/pages/login.html': { component: Login, private: false },
    '/pages/cadastro.html': { component: Cadastro, private: false },
    '#404': { component: NotFound, private: false },
    '/pages/home.html': { component: Home, private: true },
    '#contact-datails': { component: ContactDetails, private: true }
  }

  // recupera a rota pela hash, se não existir recupera a rota #404
  const route = Router[window.location.hash] || Router['#404']

  // valida se o usuário está autenticado em uma rota privada
  const notAuthenticated = route.private && !sessionStorage.getItem('@token')

  // verifica se não possui hash, ou seja, se é a rota raiz
  const isRootRoute = !window.location.hash

  if (isRootRoute || notAuthenticated) {
    window.location.href = '/pages/login.html'
    return
  }

  root.innerHTML = null
  root.append(route.component())
}

window.addEventListener('load', () => {
  redirectPage()
  window.addEventListener('hashchange', redirectPage)
})
