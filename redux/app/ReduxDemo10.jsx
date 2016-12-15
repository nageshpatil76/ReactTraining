var redux= require('redux');

console.log('Starting Redux Example');

var stateDefault= {
name:'Anonymous',
hobbies:[]
};

var nextHobbyId=1;

var reducer =(state=stateDefault,action)=> {

switch(action.type){
case 'CHANGE_NAME':
return {
...state,
name : action.name
};

case 'ADD_HOBBY':
return{
...state,
hobbies:[
...state.hobbies,
{
id:nextHobbyId++,
hobby : action.hobby
}
]

};

default:
return state;
}

};

var store=redux.createStore(reducer,redux.compose(
window.devToolsExtension ? window.devToolsExtension() : f => f
));


var unsub=store.subscribe(()=>{

var state=store.getState();
console.log('NAme is ',state.name);

document.getElementById('app').innerHTML=state.name;
console.log("New state",store.getState());

});
var currentState=store.getState();
console.log('currentState',currentState);




store.dispatch({
type: 'CHANGE_NAME',
name : "Varada"
});



store.dispatch({
type: 'CHANGE_NAME',
name : "ewuyuw"
});


store.dispatch({
type: 'ADD_HOBBY',
name : "hobby1"
});

store.dispatch({
type: 'ADD_HOBBY',
name : "hobby2"
})

unsub();
store.dispatch({
type: 'CHANGE_NAME',
name : "Emily"
});
