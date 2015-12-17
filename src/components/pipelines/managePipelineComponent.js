var React = require('react');
var Router = require('react-router');
var PipelineForm = require('./pipelineForm');
var PipelineApi = require('../../api/pipelineApi');
var Toastr = require('toastr');

var ManagePipelineComponent = React.createClass({
    mixins: [
        Router.Navigation
    ],

    statics: {
        willTransitionFrom: function(transition, component) {
            if(component.state.dirty && !confirm('Do you want to leave without saving?')){
                transition.abort();
            }
        }
    },

    getInitialState: function(){
       return{
           pipeline: {id: '', name: ''},
           errors: {},
           dirty: false
       };
   },
    
    setPipelineState: function(event){
        this.setState({dirty: true});
        var field = event.target.name;
        var value = event.target.value;
        this.state.pipeline[field] = value;
        return this.setState({pipeline: this.state.pipeline});
    },
    
    componentWillMount: function(){
        var pipelineId = this.props.params.id;

        if(pipelineId){
            this.setState({pipeline: PipelineApi.getPipelineById(pipelineId)});
        }
    },

    pipelineFormIsValid: function(){
        var formIsValid = true;
        this.state.errors = {};

        if(this.state.pipeline.name.length < 3){
            this.state.errors.name = 'Name must be at least 3 characters.';
            formIsValid = false;
        }

        this.setState({errors: this.state.errors});
        return formIsValid;
    },

    savePipeline: function(event){
        event.preventDefault();

        if(!this.pipelineFormIsValid()){
            return;
        }

        PipelineApi.savePipeline(this.state.pipeline);
        this.setState({dirty: false});
        Toastr.success('Pipeline saved.');
        this.transitionTo('pipelines');
    },

    render: function(){
       'use strict';
       return(
        <PipelineForm 
           pipeline={this.state.pipeline}
           onChange={this.setPipelineState}
           onSave={this.savePipeline}
           errors={this.state.errors} />
       );
   } 
});

module.exports = ManagePipelineComponent;
