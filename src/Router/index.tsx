import React from 'react';
import {Router,Route,Switch,Redirect} from 'react-router-dom';
import { createBrowserHistory } from "history";
import {router} from './config'
const history = createBrowserHistory();

class RouterConfig extends React.Component{
    render(){
        return(
            <Router history={history}>
                <Switch>
                    <Route path='/' exact render={()=>( <Redirect to='/home'/> )}/>
                    {
                        router.map((r)=>{
                            return <Route key={r.path} path={r.path} component={r.component}/>
                        })
                    }
                    
                </Switch>
            </Router>
        )
    }
}
export default RouterConfig;