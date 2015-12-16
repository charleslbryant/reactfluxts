'use strict';

var pipelines = require('./pipelineData').pipelines;
var _ = require('lodash');

var _generateId = function(pipeline) {
	return pipeline.name.toLowerCase();
};

var _clone = function(item) {
	return JSON.parse(JSON.stringify(item));
};

var PipelineApi = {
	getAllPipelines: function() {
		return _clone(pipelines);
	},

	getPipelineById: function(id) {
		var pipeline = _.find(pipelines, {id: id});
		return _clone(pipeline);
	},

	savePipeline: function(pipeline) {
		console.log('Pretend this just saved the pipeline to the DB via AJAX call...');

		if (pipeline.id) {
			var existingPipelineIndex = _.indexOf(pipelines, _.find(pipelines, {id: pipeline.id}));
			pipelines.splice(existingPipelineIndex, 1, pipeline);
		} else {
			pipeline.id = _generateId(pipeline);
			pipelines.push(pipeline);
		}

		return _clone(pipeline);
	},

	deletePipeline: function(id) {
		console.log('Pretend this just deleted the pipeline from the DB via an AJAX call...');
		_.remove(pipelines, { id: id});
	}
};

module.exports = PipelineApi;
