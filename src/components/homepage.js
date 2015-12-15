var React = require('react');

var Home = React.createClass({
    render: function(){
        'use strict';
        return(
            <div className="jumbotron">
                <h1>DeliveryPipe</h1>
                <h2>Continuous Delivery Pipeline Manager</h2>
                <p>Manage your entire continuous delivery pipeline from one simple interface.</p>
            </div>
        );
    }
});

module.exports = Home;
