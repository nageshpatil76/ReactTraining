var GreeterMessage = React.createClass({
    render: function () {
      var name = this.props.name;
      var department = this.props.department;

      return (
        <div>
          <h1>Hello {name}!</h1>
          <p>Deaprtment : {department}</p>
        </div>
      );
    }
});

var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var name = this.refs.name.value;

    if (name.length > 0) {
      this.refs.name.value = '';
      this.props.onNewName(name);
    }
  },
  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name"/>
        <button>Set Name</button>
      </form>
    );
  }
});

var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'Name1',
      department: 'cse!'
    };
  },
  getInitialState: function () {
    return {
        name: this.props.name
    };
  },
  handleNewName: function (name) {
    this.setState({
      name: name
    });

  },
  render: function () {
    var name = this.state.name;
    var message = this.props.message;

    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewName={this.handleNewName}/>
      </div>
    );
  }
});
var firstName = 'Name';

ReactDOM.render(
  <Greeter name={firstName}/>,
  document.getElementById('app')
);
