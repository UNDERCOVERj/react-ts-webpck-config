import * as React from 'react';
import '../scss/App.scss';
import {Headers, ContentA, ContentB} from './index';
import { HashRouter as Router, Route, Link, Switch, NavLink } from "react-router-dom";

interface StaticProps {};

interface Match {
    match: {
        params: {
            filename: string;
        }
    }
}

export default class App extends React.Component<StaticProps, {}> {
    render(): JSX.Element {
        return (<Router>
                <div className = 'home-body'>
                    <Headers name="lejunjie" type={2}></Headers>
                    {/* navlink可以展示active状态 */}
                    <NavLink to="/contentA" activeClassName="active-content"> to contentA</NavLink>  
                    <NavLink to="/contentB" activeClassName="active-content"> to contentB</NavLink>  
                    <Switch>
                        <Route path="/" exact component={ContentA}></Route>
                        <Route path="/contentA" component={ContentA}></Route>
                        {/* exact标识path强匹配 */}
                        <Route path="/contentB" component={ContentB}></Route>
                        <Route path="/:filename" component={({match}: Match) => (<h2>{match.params.filename}</h2>)}></Route>
                    </Switch>
                </div>
            </Router>)
    }
}