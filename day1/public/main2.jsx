var Greeter= React.createClass({
  render : function(){
    return(
      <div>
      <h1>hello react</h1>
      <p>this is form a comp</p>
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter/>,
  document.getElementById('app')
);
