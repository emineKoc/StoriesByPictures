// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state

function posts(state = [], action) {

  switch(action.type) {

    case 'INCREMENT_LIKES' :
      console.log("Incrementing Likes!!");
      const i = action.index;
      return [
        ...state.slice(0,i), // before the one we are updating, keep their same
        {...state[i], likes: state[i].likes + 1},   // Change the state of state[i]
        ...state.slice(i + 1), // after the one we are updating, keep their same
      ]
    default:
      return state;
  }
}

export default posts;

// WE use finctional Programming
