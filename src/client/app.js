import React from 'react';
import { Route,Switch } from 'react-router-dom'
import routes from '../shared/routes'
import Navigation from './components/navigation'

const App = () => {
    return <div>
    <Navigation />
    {routes.map(({path,exact,component:C})=>(
        <Route
        key={path}
        path={path}
        exact={exact}
        render={()=>(<C />)}
    />))}
    </div>
};

export default App;