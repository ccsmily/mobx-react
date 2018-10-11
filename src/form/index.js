import React, { Component } from 'react';
import './index.scss'
import {observer,inject} from 'mobx-react';

@inject("store")
@observer
class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
      name:'',
      msg:''
    }
    // console.log(this.props)
  }
  componentDidMount() {

  }
  nameHandler = (e) => {
    this.setState({
      name:e.target.value
    })
  }
  msgHandler = (e) => {
    this.setState({
      msg:e.target.value
    })
  }
  submit = () => {
    if(this.state.name === ''){
      return;
    }
    this.props.store.addMsg(this.state)
    this.props.history.push('/list')
    // console.log(this.props,this.store)
  }
  render() {
    return (
      <div className="container-form container">
        <div className = "form">
          <div className = "form-group">
            <label className="control-label">姓名</label>
            <input className="form-control" onInput={(e) => this.nameHandler(e)}/>
          </div>
          <div className = "form-group">
            <label className="control-label">留言</label>
            <textarea className="form-control" onInput= {(e) => {this.msgHandler(e)}}></textarea>
          </div>
        </div>
        <button className="btn btn-primary" onClick={this.submit}>提交</button>
      </div>
    );
  }
}

export default Form;
