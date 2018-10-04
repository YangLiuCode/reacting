import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        counters:[
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }

        ]
     }
    handleIncrement = counter => {
       // console.log( counter );
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index].value ++;
        this.setState({ counters });
       // console.log(this.state.counters[0]);
    }

     handerReset = () =>{
         const counters = this.state.counters.map( c=>{
             c.value = 0;
             return c;
         });
         this.setState({ counters });
     }
     handleDelete =counterId => {
         const counters = this.state.counters.filter(c=> c.id !== counterId);
         this.setState({counters});
         console.log("function handleDelete called",counterId);
     }
    render() { 
        return ( 

            <div>
            <button className = "btn btn-primary btn-sm" > Reset </button>
                { this.state.counters.map( counter =>(
                     <Counter 
                     key= {counter.id}  
                     onDelete = {this.handleDelete }
                     onIncrement = { this.handleIncrement }
                    //  value= { counter.value }
                    //  id = {counter.id}
                    counter = {counter}
                     >
                     
                         <h4>Counter #{counter.id}</h4>
                     </Counter>
                ))}
            </div> 

            );
    }
}
 
export default Counters;