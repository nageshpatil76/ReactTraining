var redux = require('redux');

console.log('Starting redux example');
var nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name;
    default:
      return state;
  };
};


var changeName=(name)=>{
return {
type: 'CHANGE_NAME',
name
}
};
var nextHobbyId = 1;
var hobbiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOBBY':
      return [
        ...state,
        {
          id: nextHobbyId++,
          hobby: action.hobby
        }
      ];
    case 'REMOVE_HOBBY':
      return state.filter((hobby) => hobby.id !== action.id);
    default:
      return state;
  }
};


var nextDepartmentId = 1;
var departmentReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_DEPARTMENT':
      return [
        ...state,
        {
          id: nextDepartmentId++,
          hobby: action.department
        }
      ];
    case 'REMOVE_DEPARTMENT':
      return state.filter((department) => department.id !== action.id);
    default:
      return state;
  }
};




var reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  department: departmentReducer,

});

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('Name is', state.name);
  document.getElementById('app').innerHTML = state.name;

  console.log('New state', store.getState());
});
// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Andrew'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Running'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Walking'
});

store.dispatch({
  type: 'REMOVE_HOBBY',
  id: 2
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Emily'
});



store.dispatch({
  type: 'ADD_DEPARTMENT',
  department: 'dep1'
});



store.dispatch({
  type: 'ADD_DEPARTMENT',
  department: 'dep2'
});

store.dispatch({
  type: 'ADD_DEPARTMENT',
  department: 'dep3'
});


store.dispatch({
  type: 'REMOVE_DEPARTMENT',
  department: 'dep4'
});


store.dispatch(changeName('jek'));
