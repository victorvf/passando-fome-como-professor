/*
    Propriedades(props), são informações, variáveis que podemos passar para um 
    componente funcionar de uma determinada forma.
*/
export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository.name}</strong>
            <p>{props.repository.description}</p>

            <a href={props.repository.link}>Site</a>
        </li>
    );
}
