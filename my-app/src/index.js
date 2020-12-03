import React from 'react'; //все скрипты необходимые для работы
import ReactDOM from 'react-dom'; //отвечает за создание дом элементов
import './index.css';
import Clock from './App';
import Button from './Button';
import reportWebVitals from './reportWebVitals';


//let phrase='world, friend';

//  function Greet(props){
//    return (
//      <h1> Hello {props.phrase}!,my name is {props.name}, {4+4} </h1>
//    )//один раз создав удалить нельзя
//  }

//  function GreetAll(){
//    return(
//      <div>
//        <Greet phrase='world' name='anton'/>
//        <Greet phrase='world' name='Kat'/>
//        <Greet phrase='world' name='mari'/>
//      </div>
//    )
//  }
//const buf= <Greet phrase='world' name='anton'/> ;
//  <React.StrictMode>,
//<Greet phrase='world' name='anton'/>  
//</React.StrictMode>  //-- вырезали из render

class App extends React.Component { //от чего наследуется
    render() { //чтобы что то отобразить на странице
        return ( <
            div className = "wrapper" >
            <
            Clock / >
            <
            Button / >
            <
            /div>
        )
    }
}


ReactDOM.render(
    //buf,  
    <
    App / > , document.getElementById('root') //то что вставить на эту стр
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();