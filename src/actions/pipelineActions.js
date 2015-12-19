'use strict';

var Dispatcher = require('../dispatcher/appDispatcher');
var PipelineApi = require('../api/pipelineApi');
var ActionTypes = require('../constants/actionTypes');

var PipelineActions = {
    createPipeline: function(pipeline){
        var newPipeline = PipelineApi.savePipeline(pipeline);

        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_PIPELINE,
            pipeline: newPipeline
        });
    },

    updatePipeline: function(pipeline){
        var updatedPipeline = PipelineApi.savePipeline(pipeline);

        Dispatcher.dispatch({
            actionType: ActionTypes.UPDATE_PIPELINE,
            pipeline: updatedPipeline
        });
    },

    deletePipeline: function(id){
        PipelineApi.deletePipeline(id);

        Dispatcher.dispatch({
            actionType: ActionTypes.DELETE_PIPELINE,
            id: id
        });
    }
};

module.exports = PipelineActions;
