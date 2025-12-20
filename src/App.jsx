import { Routes, Route } from 'react-router-dom';
import LayoutBase from './layouts/LayoutBase';

function App() {
  return (
    <Routes>

      <Route path="/" element={<LayoutBase />}>
        

        <Route index element={<h1 className="text-2xl font-bold">Bem-vindo ao Sistema! Selecione uma opção no menu.</h1>} />
        

        <Route path="alunos" element={<h1 className="text-2xl">Tela de Alunos (Em breve)</h1>} />
        <Route path="professores" element={<h1 className="text-2xl">Tela de Professores (Em breve)</h1>} />
        <Route path="turmas" element={<h1 className="text-2xl">Tela de Turmas (Em breve)</h1>} />
      
      </Route>
    </Routes>
  );
}

export default App;