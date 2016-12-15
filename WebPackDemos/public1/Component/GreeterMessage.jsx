var React= require('react');


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

module.exports=GreeterForm;
