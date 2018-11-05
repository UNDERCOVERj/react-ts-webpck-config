import * as React from 'react';
import '../scss/App.scss';
import Header from './Header';

interface StaticProps {};

export default class App extends React.Component<StaticProps, {}> {
    render() {
        return <div className = 'home-body'>
                <Header name="lejunjie" type={2}></Header>  
                dfjdioeiojio
            </div>
    }
}