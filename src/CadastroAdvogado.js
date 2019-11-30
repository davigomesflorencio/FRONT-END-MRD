import React from 'react';

function App(){

    return(
        <div>
            <div>
                Usuario: <input name="usuario" type="text"/>
            </div>
            <div>
                Nome: <input name="nome" type="text"/>
            </div>
            <div>
                Endereço: <input name="endereco" type="text"/>
            </div>
            <div>
                Email: <input name="email" type="text"/>
            </div>      
            <div>
                Senha: <input name="senha" type="password"/>
            </div>
            <div>
                OAB: <input name="oab" type="number"/>
            </div>
            <div>
                CPF: <input name="cpf" type="number"/>
            </div>

        </div>
    )
}

export default App;