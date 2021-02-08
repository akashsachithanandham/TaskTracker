import React, { Component } from 'react';
import Counter from './counterComponent';
class Counters extends Component {
    state = {  
        count: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
        ]
    }
    render() { 
        return (<div>
            {this.state.count.map(counter => (
                <Counter key={counter.id} value={counter.value} selected={true}/>
            ))}
        </div>);
    }
}
 
export default Counters;