import Item from "./Item"

function List() {
    return (
        <>
            <ul>'
                <Item marca='Lamborguini' ano_lancamento={1980} />
                <Item marca="Ferrari" />
                <Item marca="Renault" />
                <Item />
                <Item marca="Volkswagen" ano_lancamento={1933} />
            </ul>
        </>
    )
}

export default List