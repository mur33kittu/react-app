import React, {PureComponent} from 'react';

class Life extends PureComponent
{
    state = {
        title : 'life cycles'
    }
    componentWillMount()
    {
        console.log("Component Will Mount");
    }
    render()
    {
        console.log("Render");
        return (
            <div>
                <h3>Life : {this.state.title}</h3>
                
            <button onClick={() => this.setState({title : "Changed something else"}) }>Click to Change</button>
            </div>
        )
    }
    componentDidMount()
    {
        console.log("After Render");
    }
    // shouldComponentUpdate(nextProps, nextState)
    // {
    //     if(nextState.title === this.state.title)
    //     {
    //         return  false;
    //     }
    //     return true;
    // }
}

export default Life;