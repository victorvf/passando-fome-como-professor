/*
    Por padrão o React não fica observando todas as variáveis do sistema
    para ver se o valor dela mudou, então nós usamos o useState para declara
    explicitamente ao React que ele deve ficar observando essa variável
    declarada com o useState.
*/
import { useState } from "react";

export function Count() {
    const [count, setCount] = useState(0);

    function add() {
        setCount(count + 1);
    }

    return (
        <div>
            <strong>{count}</strong>
            <br/>
            <button onClick={add}>Add</button>
        </div>
    )
}
