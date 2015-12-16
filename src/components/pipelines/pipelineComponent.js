var React = require('react');
var PipelineApi = require('../../api/pipelineApi');
var PipelineList = require('./pipelineList');

var PipelineComponent = React.createClass({
    getInitialState: function(){
        return {
            pipelines: []
        };
    },

    componentDidMount: function(){
        if(this.isMounted()){  
        this.setState({pipelines: PipelineApi.getAllPipelines() });
        }
    },

    render: function () {
        'use strict';

        return(
            <div>
                <h1>Pipelines</h1>
                <PipelineList pipelines = {this.state.pipelines} />
            </div>
        );
    }
});

module.exports = PipelineComponent;
