var React = require('react');

var About = React.createClass({
    statics: {
        willTransitionTo: function(transition, params, query, callback) {
            if(!confirm('Do you want to see this page?')){
                transition.about();
            }else {
                callback();
            }

        }
    },

    render: function () {
        'use strict';
        return(
            <div>
                <h1>About</h1>
                <p>
                    This is an experiment in wrapping various APIs for tools invloved in continuous delivery to provide a unified UI to manage the entire software delivery pipeline. Some of the APIs include:
                    <ul>
                        <li>Jira</li>
                        <li>GitHub</li>
                        <li>Go.cd</li>
                        <li>Azure</li>
                        <li>Power BI</li>
                    </ul>
                </p>
            </div>
        );
    }
});

module.exports = About;
