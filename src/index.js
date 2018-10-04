import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

//import Counter from './components/counter'
import Counters from './components/counters'

ReactDOM.render(<Counters/>, document.getElementById('root'));

registerServiceWorker();


// import React from 'react';
// import ReactDOM from 'react-dom';

// const element = <h1>Hello World</h1>
// console.log(element);
// var oDiv = document.getElementById('root');
// ReactDOM.render(element,oDiv);

