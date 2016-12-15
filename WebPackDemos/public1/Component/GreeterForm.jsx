var React= require('react');
var  ReactDOM= require('react-dom');

var GreeterForm=React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var name = this.refs.name.value;
    var dept=this.refs.dept.value;
    if (name.length > 0) {
      this.refs.name.value = '';
      this.refs.dept.value = '';
      this.props.onNewName(name,dept);
    }
  },
  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name"/>
        <input type="text" ref="dept" />
        <button>Set Name</button>
      </form>
    );
  }
  });

module.exports=GreeterMessage;
