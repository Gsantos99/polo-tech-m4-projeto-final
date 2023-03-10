import { entrar } from "../services/auth.service.js"

const login = document.createElement('form')
login.setAttribute("id", "p-login")

const events = () => {
    login.addEventListener('submit', async (e) => {
        e.preventDefault()

        const fd = new FormData(login)
        const data = Object.fromEntries(fd)

        entrar(data)
            .then((response) => {
                sessionStorage.setItem('@user', JSON.stringify(response.data))
                sessionStorage.setItem("@token", response.data.token)

                history.replaceState(null, "", "/#contacts")// modifica a rota sem reload
                window.location.reload() // força o reload da página com a nova hash
            })
    })
}

export const Login = () => {
    login.innerHTML = `
        
    <div class="container-agenda">
      <div class="titulo-agenda">
        <h1>Agenda app</h1>
        
        <p>Salve todos os seus contatos</p>
        <p>Em <span class="subtitulo-cor">um só lugar!</span> </p>
      </div>
      <img src="https://www.itau.com.br/content/dam/itau/atendimento/pf/ilustracao-de-cliente-itau-falando-no-celular.png" alt="Pessoas falando no celular" />
    
        </div>
       
    </div>
     
        <div class='container'> 
        <h1> Login </h1>
        <label for="email">Usuário</label>
        <input id="email" name="email" type="email" />

        <label for="senha">Senha</label>
        <input id="senha" name="senha" type="password" />

        <fildset>
            <label for="salvar">Salvar</label>
            <input name="salvar" id="salvar" type="radio" value="true" />
            <label for="nao-salvar">Não salvar</label>
            <input name="salvar" id="nao-salvar" type="radio" value="false" />
        </fildset>

        <button id="btn-entrar">Entrar</button>
        <p>Não tem conta? <a href="/#signup">Crie agora!</a></p>
        </div>
    `

    events()
    return login
}
