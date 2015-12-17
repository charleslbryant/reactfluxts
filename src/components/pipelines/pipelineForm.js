var React = require('react');
var TextInput = require('../common/textInput');

var PipelineForm = React.createClass({
    propTypes:{
        pipeline: React.PropTypes.object.isRequired,
        onSave: React.PropTypes.func.isRequired,
        onChange: React.PropTypes.func.isRequired,
        errors: React.PropTypes.object
    },

    render: function () {
        'use strict';

        return(
            <div>
                <h1>Manage Pipeline</h1>
                <form>
                    <TextInput
                        name='name'
                        label='Name'
                        value={this.props.pipeline.name}
                        onChange={this.props.onChange}
                        error={this.props.errors.name} />
                    <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
                </form>
            </div>
        );
    }
});

module.exports = PipelineForm;
