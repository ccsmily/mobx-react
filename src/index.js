import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {observable, action} from 'mobx';
import { Provider } from 'mobx-react';

class Store {
    @observable msgList = [];
    @action addMsg(msg){
        this.msgList = this.msgList.concat([msg])
    }
}

const store = new Store();

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>, 
document.getElementById('root'));