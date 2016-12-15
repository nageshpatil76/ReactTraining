var Greeter= React.createClass({

getDefaultProps:function(){
  return{
    name: 'NAME1',
    dept : 'CSE'
  };
},

onBtnClick:function(e){
e.preventDefault();

var usr=this.refs.user.value;

alert(usr);
},
  render : function(){
  var name = this.props.name;
  var dept= this.props.dept;
    return(
      <div>
      <h1>hello {name} {dept}! </h1>


<form onSubmit={this.onBtnClick}>
<input type="text" ref="user"/>
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
