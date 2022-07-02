import redux from 'redux';

const createStore=redux.c

const USER_ACTION_TYPES = {
    SET_USERNAME: 'SET_USERNAME',
    SET_EMAIL:'SET_EMAIL',
    SET_SOSMED: 'SET_SOSMED',
    SET_CITY: 'SET_CITY',
    SET_BIO: 'SET_BIO',
    SET_SCORE: 'SET_SCORE',
    SET_PASSWORD:'SET_PASSWORD'
    

  };
  const INITIAL_STATE = {
    currentUser: null,
  };


const userReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case USER_ACTION_TYPES.SET_USERNAME:
        return { ...state, username: payload };
      default:
        return state;
    }
  };


  