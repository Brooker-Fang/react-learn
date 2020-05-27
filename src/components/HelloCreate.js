import React from 'react';

const Hello = React.createClass({
  getInitialState: function () {
    return {
      list: []
    }
  },
  render:function(){
    return (<div>HelloWorld</div>)
  }
})

export default Hello