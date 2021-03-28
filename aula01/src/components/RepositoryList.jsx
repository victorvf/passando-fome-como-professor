import { RepositoryItem } from "./RepositoryItem";

const respository = {
    name: "Welcome to the Django",
    description: "Curso do Henrique Bastos sobre desenvolvimento web com Django",
    link: "https://github.com/victorvf/welcome-to-the-django"
}

export function RepositoryList() {
    return (
        <section>
            <h1>Lista de repositorios</h1>

            {/*
                Para passar valores a um Componente filho, basta você utilizar
                "{valor}", igual ao Componente abaixo.
            */}
            <ul>
                <RepositoryItem repository={respository} />
                <RepositoryItem repository={respository} />
                <RepositoryItem repository={respository} />
                <RepositoryItem repository={respository} />
            </ul>
        </section>
    );
}
