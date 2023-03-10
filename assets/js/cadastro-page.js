// import { criarUsuario } from "../services/user.service"

const login = document.querySelector('#form-cadastro')

login.addEventListener('submit', e => {
  e.preventDefault()

  const formData = new FormData(login)
  const dados = Object.fromEntries(formData)

  console.log(dados)
  
//   criarUsuario(data)
//   .then((response) => {
//       const retorno = signup.querySelector("#retorno")

//       if(response.status === 409) {
//           retorno.innerText = response.mensagem
//       }
      
//       if(response.status === 200) {
//           window.location.href = "/#login"
//       }
//   })
//   .catch((error) => {
//       console.error(error)
//   })

})



