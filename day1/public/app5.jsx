var GreeterMessage = React.createClass({
    render: function () {
      var name = this.props.name;
      var dep = this.props.dep;

      return (
        <div>
          <h1>Hello {name}!</h1>
          <p>{dep}</p>
        </div>
      );
    }
});

var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var name = this.refs.name.value;
var dep = this.refs.dep.value;
    if (name.length > 0) {
      this.refs.name.value = '';
      this.props.onNewName(name);
    }
    if (dep.length > 0) {
      this.refs.dep.value = '';
      this.props.onNewDep(dep);
    }

  },
  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name"/>
        <input type="text" ref="dep"/>
        <button>Set Name</button>
      </form>
    );
  }
});

var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is the default message!'
    };
  },
  getInitialState: function () {
    return {
        name: this.props.name
        dep: this.props.dep
    };
  },
  handleNewName: function (name) {
    this.setState({
      name: name
    });

    handleNewDep: function (dep) {
      this.setState({
        dep: dep
      });

  },
  render: function () {
    var name = this.state.name;
    var dep = this.props.dep;

    return (
      <div>
        <GreeterMessage name={name} dep={dep}/>
        <GreeterForm onNewName={this.handleNewName}/>

        </div>
    );
  }
});

var firstName = 'NAme1';


ReactDOM.render(
  <Greeter name={firstName}/>,
  document.getElementById('app')
);
