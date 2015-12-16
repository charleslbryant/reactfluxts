var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
    render: function(){
        'use strict';
        return(
            <div className="jumbotron">
                <h1>DeliveryPipe</h1>
                <h2>Continuous Delivery Pipeline Manager</h2>
                <p>Manage your entire continuous delivery pipeline from one simple killer interface.</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
            </div>
        );
    }
});

module.exports = Home;
