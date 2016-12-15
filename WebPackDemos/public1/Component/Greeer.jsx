var React= require('react');
var  ReactDOM= require('react-dom');

var GreeterMessage= require('./GreeterMessage');
var GreeterForm= require('./GreeterForm');

var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React value changed',
      dept: 'This is the default department change!'
    };
  },
  getInitialState: function () {
    return {
        name: this.props.name,
        dept:this.props.dept
    };
  },
  handleNewName: function (name,dept) {
    this.setState({
      name: name,
      dept:dept
    });
  },
  render: function () {
    var name = this.state.name;
    var dept = this.state.dept;

    return (
      <div>
        <GreeterForm onNewName={this.handleNewName}/>
        <GreeterMessage name={name} dept={dept}/>
      </div>
    );
  }
});

module.exports=Greeter;
