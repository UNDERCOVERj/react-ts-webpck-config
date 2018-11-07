import * as React from 'react';
import { HashRouter as Router, Route, Link, Switch, NavLink } from "react-router-dom";

interface PropInterface {
    match: {
        params: {
            id: string;
        };
        url: string;
        path: string;
    };
}

export default class ContentA extends React.Component<PropInterface, {}> {
    constructor(props: PropInterface) {
        super(props);
    }
    componentWillMount() {
        console.log(this.props);
    }
    render() {
        return (<div>
            <h2>ContentA</h2>
            <Link to={`${this.props.match.url}/3`}>点击进入contentA/3</Link>
            <Route 
                path={`${this.props.match.path}/:id`} 
                component={({match}: PropInterface) => {return (<h1>{match.params.id}</h1>)}}>
            </Route>
        </div>)
    }
}