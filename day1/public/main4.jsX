var Greeter= React.createClass({

getDefaultProps:function(){
  return{
    name: 'NAME1',
    dept : 'CSE'
  };
},
  render : function(){
  var name = this.props.name;
  var dept= this.props.dept;
    return(
      <div>
      <h1>hello {name} {dept}! </h1>

      </div>
    );
  }
});

ReactDOM.render(
  <Greeter/>,
  document.getElementById('app')
);
