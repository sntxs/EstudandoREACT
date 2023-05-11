import Button from "./evento/Button";

function Evento() {
    function meuEvento() {
        alert(`Fui ativado !`)
    }

    function Favorito() {
        alert(`Fui favoritado`)
    }


    return (
        <>
            <p>Clique para ativar</p>
            <Button 
            event={meuEvento} 
            text="Primeiro Evento" 
            />
            {
                
            }
            <Button 
            event={Favorito} 
            text="Marcar como Favorito" 
            />
        </>
    )
}

export default Evento;