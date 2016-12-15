var redux= require('redux');

console.log('Starting Redux Example');

var stateDefault= {
name:'Anonymous',
hobbies:[],
department:[]
};

var nextHobbyId=1;
var nextDepartmentId=1;

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

case 'ADD_DEPARTMENT':
return{
...state,
department:[
...state.department,
{
id:nextDepartmentId++,
department : action.department
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


console.log("New dept",store.getState());
});




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
hobby : "hobby1"
});

store.dispatch({
type: 'ADD_HOBBY',
hobby : "hobby2"
})


store.dispatch({
type: 'ADD_DEPARTMENT',
department : "dep1"
})


store.dispatch({
type: 'ADD_DEPARTMENT',
department : "dep2"
})

unsub();
store.dispatch({
type: 'CHANGE_NAME',
name : "Emily"
});
