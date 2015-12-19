var React = require('react');
var PipelineActions = require('../../actions/pipelineActions');
var PipelineStore = require('../../stores/pipelineStore');
var PipelineList = require('./pipelineList');
var Router = require('react-router');
var Link = require('react-router').Link;

var PipelineComponent = React.createClass({
    getInitialState: function(){
        return {
            pipelines: PipelineStore.getAllPipelines()
        };
    },

    componentWillMount: function(){
      PipelineStore.addChangeListner(this._onChange);
    },

    componentWillUnmount: function(){
      PipelineStore.removeChangeListner(this._onChange);
    },

    _onChange: function(){
      this.setState({pipelines: PipelineStore.getAllPipelines() });
    },

    render: function () {
        'use strict';

        return(
            <div>
                <h1>Pipelines</h1>
                <Link to="addPipeline" className="btn btn-default">Add Pipeline</Link>
                <PipelineList pipelines = {this.state.pipelines} />
            </div>
        );
    }
});

module.exports = PipelineComponent;
