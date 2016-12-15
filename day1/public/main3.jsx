var Greeter= React.createClass({

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
  <Greeter  name = "varada" dept="computer sc"/>,
  document.getElementById('app')
);
