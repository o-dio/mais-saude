import { useContext } from 'react'
import Context from './Context'

function Card() {
    const [user, setUser] = useContext(Context)

    if (!user) {
        return <div>Selecione um usuário para ver os detalhes.</div>
    }

    return (
        <div className="flex flex-col items-center justify-center w-150 bg-gray-800 p-15">
            <div className="card">
                {user ? (
                    <div className="text-white">
                        <h1 className="text-3xl mb-4 font-bold">{user.name}</h1>
                        <p className="text-xl">Email: {user.email}</p>
                        <p className="text-xl">Endereço: {user.address.city}</p>
                    </div>
                ) : (
                    <p className="text-white">Selecione um usuário para ver os detalhes.</p>
                )}
            </div>
        </div>
    )
}

export default Card;
