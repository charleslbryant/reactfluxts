'use strict';

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var Assign = require('object-assign');
var _ = require('lodash');
var CHANGE_EVENT = 'change';

var _pipelines = [];

var PipelineStore = Assign({}, EventEmitter.prototype, {
    addChangeListner: function(callback){
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListner: function(callback){
        this.removeListener(CHANGE_EVENT, callback);
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    getAllPipelines: function(){
        return _pipelines;
    },

    getPipelineById: function(id){
        return _.find(_pipelines, {id : id});
    }
});

Dispatcher.register(function(action){
     switch(action.actionType){
         case ActionTypes.INITIALIZE:
             _pipelines =  action.initialData.pipelines;
             PipelineStore.emitChange();
             break;

         case ActionTypes.CREATE_PIPELINE:
             _pipelines.push(action.pipeline);
             PipelineStore.emitChange();
             break;

         case ActionTypes.UPDATE_PIPELINE:
             var existingPipeline = _.find(_pipelines, {id: action.pipeline.id});
             var existingPipelineIndex = _.indexOf(_pipelines, existingPipeline);
             _pipelines.splice(existingPipelineIndex, 1, action.pipeline);
             PipelineStore.emitChange();
             break;

         case ActionTypes.DELETE_PIPELINE:
             _.remove(_pipelines, function(pipeline) {
                 return action.id === pipeline.id;
             });
             PipelineStore.emitChange();
             break;

         default:
             // no op
    }
});

module.exports = PipelineStore;
