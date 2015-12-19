var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var PipelineApi = require('../api/pipelineApi');

var InitializeActions = {
    initApp: function(){
        Dispatcher.dispatch({
            actionType: ActionTypes.INITIALIZE,
            initialData: {
                pipelines: PipelineApi.getAllPipelines()
            }
        });
    }
};

module.exports = InitializeActions;
