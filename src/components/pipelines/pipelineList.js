var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var PipelineActions = require('../../actions/pipelineActions');
var toastr = require('toastr');

var PipelineList = React.createClass({
    propTypes: {
      pipelines: React.PropTypes.array.isRequired  
    },

    deletePipeline: function(id, event){
        event.preventDefault();
        PipelineActions.deletePipeline(id);
        toastr.success('Pipeline deleted.');
    },

    render: function () {
        'use strict';

        var createPipelineRow = function(pipeline){
            return (
                <tr key={pipeline.id}>
                    <td><a href="#" onClick={this.deletePipeline.bind(this, pipeline.id)}>Delete</a></td>
                    <td><Link to="managePipeline" params={{id: pipeline.id}}>{pipeline.id}</Link></td>
                    <td>{pipeline.name}</td>
                </tr>
            );
        };

        return(
            <div>
                <table className="table">
                    <thead>
                        <th></th>
                        <th>ID</th>
                        <th>Name</th>
                    </thead>
                    <tbody>
                        {this.props.pipelines.map(createPipelineRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = PipelineList;
