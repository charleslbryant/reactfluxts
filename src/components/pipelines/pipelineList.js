var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var PipelineList = React.createClass({
    propTypes: {
      pipelines: React.PropTypes.array.isRequired  
    },
    render: function () {
        'use strict';

        var createPipelineRow = function(pipeline){
            return (
                <tr key={pipeline.id}>
                    <td><Link to="managePipeline" params={{id: pipeline.id}}>{pipeline.id}</Link></td>
                    <td>{pipeline.name}</td>
                </tr>
            );
        };

        return(
            <div>
                <table className="table">
                    <thead>
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
