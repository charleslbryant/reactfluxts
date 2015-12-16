'use strict';

var React = require('react');
var Router = require('react-router');

var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var Redirect = Router.Redirect;
var NotFoundRoute = Router.NotFoundRoute;

var routes = (
    <Route name='app' path='/' handler={require('./components/app')}>
        <DefaultRoute handler={require('./components/homeComponent')} />

        <Route name='pipelines' handler={require('./components/pipelines/pipelineComponent')} />
        <Route name='about' handler={require('./components/about/aboutComponent')} />

        <Redirect from='about/*' to='about' />
        <Redirect from='about-us' to='about' />

        <NotFoundRoute handler={require('./components/NotFound')} />
    </Route>
);

module.exports = routes;
