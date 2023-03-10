// Login

const login = document.querySelector('#form-login')

login.addEventListener('submit', e => {
  e.preventDefault()

  const formData = new FormData(login)
  const dados = Object.fromEntries(formData)

  console.log(dados)
})