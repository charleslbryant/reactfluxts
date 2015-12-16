'use strict';

var React = require('react');
var Link = require('react-router').Link;

var NotFound = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Page Not Found</h1>
                <p>Dang, 305 + 99 I can't find that page.</p>
                <p><Link to="app">Back to Home</Link></p>
            </div>
        );
    }
});

module.exports = NotFound;
