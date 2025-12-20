import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className="w-full h-16 bg-blue-600 flex items-center justify-center text-white text-xl font-bold">
            <div className="text-xl font-bold">Gerenciador Acadêmico</div>

            <div className="flex gap-6 items-center">
                <Link to="/" className="hover:text-blue-200 transition-colors">Início</Link>
                <span className="font-semibold">Olá, terráqueo</span>
                <button className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-sm font-bold transition-colors">Sair</button>
            </div>
        </nav>


    );
}

export default Navbar;