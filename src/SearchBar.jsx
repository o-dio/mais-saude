import { useEffect, useState, useContext } from 'react'
import Context from './Context'

function SearchBar() {

    const [usuarios, setUsuarios] = useState([])
    const [termoBusca, setTermoBusca] = useState('')
    const [selecionado, setSelecionado] = useContext(Context)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((dados) => setUsuarios(dados))
            .catch((erro) => console.error('Erro ao buscar usuários:', erro))
    }, [])

    const usuariosFiltrados = usuarios.filter((user) =>
        user.name.toLowerCase().includes(termoBusca.toLowerCase())
    )



    return (
        <>
            <div className="p-2 border border-solid">

                <input
                    className="border border-solid"
                    type="text"
                    id="txtBusca"
                    placeholder="Buscar"
                    onInput={(e) => setTermoBusca(e.target.value)}
                />
            </div>
            <ul>
                {usuariosFiltrados.length > 0 ? (
                    usuariosFiltrados.map((user) => (
                        <li key={user.id}>
                            <button onClick={() => setSelecionado(user)}>{user.name}</button>
                        </li>
                    ))
                ) : (
                    <li>Nenhum usuário corresponde a busca!</li>
                )
                }
            </ul>
        </>
    )

}

export default SearchBar