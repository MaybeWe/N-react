import login from '../login/login';
import home from '../home/index';
import React from 'react';
import {Router,Route,Switch,Redirect} from 'react-router-dom';
import { createHashHistory } from "history";
const history = createHashHistory();

class RouterConfig extends React.Component{
    render(){
        return(
            <Router history={history}>
                <Switch>
                    <Route path='/' exact render={()=>(
                        <Redirect to='/login'/>
                    )}/>
                    <Route path='/login' component={login}/>
                    <Route path='/home' component={home}/>
                </Switch>
            </Router>
        )
    }
}
export default RouterConfig;