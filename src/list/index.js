import React, { Component } from 'react';

import {inject,observer} from 'mobx-react';

@inject("store")
@observer
class List extends Component {
  render() {
    // console.log(this.props.store.msgList)
    return (      
      <div>
        {this.props.store.msgList.map(
          (item,index) => <li key={index}>{item.name}:{item.msg}</li>
        )}
      </div>
    );
  }
}

export default List;
