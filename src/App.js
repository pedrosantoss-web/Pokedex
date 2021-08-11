import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Info from './Components/Info';
import CardList from './Components/CardList';
import About from './Components/About';
import Grass from './Components/PokemonTypes/Grass';
import './Styles/main.scss';

export default function App() {

  return(
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={CardList} />
          <Route path="/info/:id" component={Info} />
          <Route path="/about" component={About} />
          <Route path="/grass" component={Grass} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}