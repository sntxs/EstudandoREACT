import { useState } from "react";

function Form() {

    function cadUsuario(e) {
        e.preventDefault();
        /*
         console.log(`Usuário "${name}" cadastrado!`)
        console.log(`Senha digita é ${password}`)
        */
        alert(`Usuário "${name}" cadastrado !`)
        alert(`Sua senha de acesso é: ${password} !`)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    //Aqui o usuario é cadastrado
    return (
        <div>
            <h1>Meu Formulário:</h1>
            <form onSubmit={cadUsuario}>
                <div>
                    <label htmlFor="name">Login:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Usuário"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Senha"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="Acessar" />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}


export default Form