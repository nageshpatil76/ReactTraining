var GreeterMessage = React.createClass({
    render: function () {
      var name = this.props.name;
      var message = this.props.message;

      return (
        <div>
          <h1>Hello {name}!</h1>
          <p>{message}</p>
        </div>
      );
    }
});


var GreeterForm = React.createClass({

onBtnClick:function(e){
e.preventDefault();


var name=this.refs.name.value;
this.refs.name.value="";
if (name.length > 0) {
  this.refs.name.value = '';
  this.props.onNewName(name);
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

  ==============



  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name"/>
        <button>Set Name</button>
      </form>
    );
  }
});


var Greeter= React.createClass({

getDefaultProps:function(){
  return{
    name: 'NAME1',
    dept : 'CSE'
  };
},

getInitialState:function(){
return {
name: this.props.name
};
},

onBtnClick:function(e){
e.preventDefault();

var nameRef=this.refs.name;
var name= nameRef.value

var name=this.refs.name.value;
this.refs.name.value="";
this.setState({
name : name
});
},
  render : function(){

  var name = this.state.name;
  var dept= this.props.dept;
    return(
      <div>
      <h1>hello {name} {dept}! </h1>


<form onSubmit={this.onBtnClick}>
<input type="text" ref="name"/>
<button>Set Name</button>
</form>
      </div>
    );

  }
});

ReactDOM.render(
  <Greeter/>,
  document.getElementById('app')
);
