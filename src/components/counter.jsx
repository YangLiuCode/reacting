import React, { Component } from 'react';
class Counter extends Component {
   
    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }
    // handleIncrement(){
    //     console.log('Increment clicked',this);
    // }
    // state = {
    //      value: this.props.counter.value
    //     //count: this.props.value
    //     // imageUrl:'https://picsum.photos/200',
    //     // tags: ['tag1','tag2','tag3']
    //     // tags:[]
    //   }
    // 修改文件
    //再次修改文件
    //再次修改2
 
    renderTags(){
        if( this.state.tags.length === 0 ) return <p>There are no tags!</p>
        return (<ul>
                    { this.state.tags.map(tag => <li key={tag}>{tag}</li>) }
                    <li></li>
                </ul>);
    } 
     

    // handleIncrement = ()=>{
        
    //     this.setState({ value: this.state.value + 1 });
    // }
    // doHandleIncrement = () => {
    //     this.handleIncrement({ id: 1 });
    // }
    render() { 
       console.log("props",this.props);
       return (
                <div>
                    {/* <img src={this.state.imageUrl} alt=""/> */}
                    {/* {this.props.children} */}
                    <span className={this.getBadgeClasses()}>{this.fromatCount()}</span>
                    <button 
                       // onClick ={this.handleIncrement} 
                        onClick ={()=>this.props.onIncrement(this.props.counter)} 
                        className = "btn btn-secondary btn-sm"
                        >
                            Increment
                     </button>
                     <button onClick = {() => this.props.onDelete(this.props.counter.id)} className = "btn btn-danger btn-sm m-2"> Delete</button>


                    {/* <ul>
                        { this.state.tags.map(tag => <li key={tag}>{tag}</li>) }
                        <li></li>
                    </ul> */}
                    
                </div>
                );
        // return (<div>
        //             {this.state.tags.length === 0 && "Please creat a new tag!"}
        //             { this.renderTags() }
        //         </div>)
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    fromatCount(){
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value; 
    }
}
 
export default Counter;