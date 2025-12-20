// src/components/Sidebar.jsx
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-200 flex flex-col h-[calc(100vh-64px)] border-r border-gray-300">
      

      <div className="p-6 flex flex-col items-center border-b border-gray-300 bg-gray-300">
        <div className="w-24 h-24 bg-gray-500 rounded-full mb-3 flex items-center justify-center text-white text-3xl">
          👤
        </div>
        <p className="font-bold text-gray-700">Admin</p>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Administração</p>
        
        <Link to="/alunos" className="block px-4 py-2 text-gray-700 hover:bg-blue-600 hover:text-white rounded transition-colors">
          Cadastrar Alunos
        </Link>
        <Link to="/professores" className="block px-4 py-2 text-gray-700 hover:bg-blue-600 hover:text-white rounded transition-colors">
          Cadastrar Professores
        </Link>
        <Link to="/turmas" className="block px-4 py-2 text-gray-700 hover:bg-blue-600 hover:text-white rounded transition-colors">
          Gerenciar Turmas
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;