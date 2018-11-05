import * as React from 'react';
import '@home/scss/Header.scss';

interface InitialProps {
    name: string;
    type: number;
};

export default class App extends React.Component<InitialProps, {}> {
    constructor(props: InitialProps) {
        super(props);
        console.log(this.props);
    }
    render() {
        return <div className = 'home-header'>
            <span>  
                dfjiejfoiejiojfioejoi fkgjoijoifjeiofjeifefe
            </span>
            <p>djfioejfdfeddddddddioj</p>
        </div>
    }
}