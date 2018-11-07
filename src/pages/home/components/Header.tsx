import * as React from 'react';
import '@home/scss/Header.scss';

interface InitialProps {
    name: string;
    type: number;
};
interface State {
    status: number;
    otherComponent: any;
}

export default class App extends React.Component<InitialProps, {}> {
    state: State = {
        otherComponent: null,
        status: 200
    }
    constructor(props: InitialProps) {
        super(props);
        console.log(this.props);
    }
    componentDidMount() {
        this.setState({
            status: 500
        })
    }
    addComponent = async () => {
        let module = await import('./Other');
        
        this.setState({
            otherComponent: <module.default/>
        })
    }
    render() {
        let arr: number[] = [2, 3, 4, 4];
        return <div className = 'home-header'>
            <span>  
                <button onClick={this.addComponent}>点金引入</button>
                {this.state.otherComponent}
                {this.state.status}
            </span>
            <p>djfioejfdfeddddddddioj</p>
        </div>
    }
}