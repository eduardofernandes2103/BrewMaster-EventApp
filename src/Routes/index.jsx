import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Confraternization from '../pages/Confraternization'
import Prom from '../pages/Prom'
import Wedding from '../pages/Wedding'


const Routes = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route exact path='/catalog'>
                <Catalog />
            </Route>
            <Route exact path='/prom'>
                <Prom />
            </Route>
            <Route exact path='/wedding'>
                <Wedding />
            </Route>
            <Route exact path='/confraternization'>
                <Confraternization />
            </Route>
        </Switch>
    )
}

export default Routes;
