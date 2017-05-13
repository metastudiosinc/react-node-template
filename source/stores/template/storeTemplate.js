//replace <NAME> with relevant value
import {EventEmitter} from 'events'
import React from 'react'
import assign from 'object-assign'

//local modules
import AppDispatcher from "../dispatcher/AppDispatcher.js"
import Constants from "../constants/applicationConstants.js"

let _store = {}
_store.something = "something"

function setSomething(value) {
  _store.something = value
}

const <NAME>Store = assign({}, EventEmitter.prototype,{

  getSOMETHING: function() {
    return _store.something;
  },

  emitChange: function() {
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }



});


// Register dispatcher callback
AppDispatcher.register(function(action) {
  // var text;
  // Define what to do for certain actions
  console.log(action.data);
  switch(action.type) {

    case ActionTypes.SETSOMETHING:
      setSomething(action.data);
      break;

    default:
      return true;
  }

  // If action was acted upon, emit change event
  <NAME>Store.emitChange();

    return true;

});

export default <NAME>Store
