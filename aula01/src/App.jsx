import "./styles/global.scss";
import { RepositoryList } from "./components/RepositoryList"
import { Count } from "./components/Count"

export function App() {
    /*
        O React não aceita você retornar mais de uma tag HTML por Componente,
        então uma solução é utilizar os fragmentos(<>código</>) para envolver
        as tags.
    */
    return (
        <>
            <RepositoryList />
            <Count />
        </>
    );
}
