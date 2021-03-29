import React from 'react';

class Clock2 extends React.Component {
    constructor (props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount(){
        this.counter = setInterval(()=>this.tick(),1000);
    }

    componentWillUnmount(){
        clearInterval(this.counter);
    }

    tick (){
        setInterval(this.setState({date: new Date()}));
    }

    render (){
        return(
            <>
            <p>
                It's funny time:<br />
                &lt; {this.state.date.toLocaleTimeString()} &gt;
            </p>
            </>
        );
    }
}

export default Clock2;
