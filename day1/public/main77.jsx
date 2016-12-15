var GreeterMessage=React.createClass({
render: function () {
  var name = this.props.name;
  var dept = this.props.dept;

  return (
    <div>
      <h1>Hello {name}!</h1>
      <p>Department {dept}</p>
    </div>
  );
}
});

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

  var Greeter = React.createClass({
    getDefaultProps: function () {
      return {
        name: 'React',
        dept: 'This is the default department!'
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
ReactDOM.render(<Greeter name="Varada"/>,document.getElementById('app'));
