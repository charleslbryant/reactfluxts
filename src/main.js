$ = jQuery = require('jquery');
var React = require('react');
var Header = require('./components/common/headerComponent');
var Home = require('./components/homeComponent');
var About = require('./components/about/aboutComponent');
var Pipelines = require('./components/pipelines/pipelineComponent');

(function(win) {
    'use strict';
    var App = React.createClass({
        render: function() {
            var Child;

            switch(this.props.route) {
                case 'about': Child = About;
                    break;
                case 'pipelines': Child = Pipelines;
                    break;
                default: Child = Home;
            }

            return (
                <div>
                    <Header/>
                    <Child/>
                </div>
            );
        }
    });

    function render() {
        var route = win.location.hash.substr(1);
        React.render(<App route = {route} />, document.getElementById('app'));
    }

    win.addEventListener('hashchange', render);
    render();
})(window);
