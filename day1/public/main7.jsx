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

var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var name = this.refs.name.value;

    if (name.length > 0) {
      this.refs.name.value = '';
      this.props.onNewName(name);
    }
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
