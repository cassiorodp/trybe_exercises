import './App.css';
import { Route, Switch } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Projetos from './pages/Projetos';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Nomatch from './pages/Nomatch';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Inicio}/>
        <Route exact path='/projects' component={Projetos}/>
        <Route exact path='/about' component={Sobre}/>
        <Route exact path='/contact' component={Contato}/>
        <Route component={Nomatch} />
      </Switch>
    </>
  );
}

export default App;
