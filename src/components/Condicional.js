import { useState } from "react";

function Condicional() {

    const [email, setMail] = useState()
    const [userMail, setUserMail] = useState()

    function enviarEmail(e) {
        e.preventDefault();
        setUserMail(email)
        alert(`Email enviado!`)

    }

    function ClearMail(e) {
        setUserMail('')
        alert(`Email limpo!`)

    }


    return (
        <div>
            <h2>Cadastre seu email</h2>
            <form onSubmit={enviarEmail}>
                <input
                    type='email'
                    placeholder='Digite seu e-mail...'
                    id="email"
                    name="email"
                    onChange={(e) => setMail(e.target.value)}
                />
                <button type="submit" onClick={enviarEmail}>Enviar E-mail</button> <br></br>
                {userMail && (
                    <div className="bg-primary text-light 10px">
                        O e-mail do Usuário é: {userMail}
                        <br></br>
                        <button onClick={ClearMail}>Limpar E-mail</button>
                    
                    </div>
                )}
            </form>

        </div>
    )
}

export default Condicional