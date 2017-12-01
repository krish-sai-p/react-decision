'use strict';

console.log('I am running');

// babel src/app.js --out-file=public/scripts/app.js --resets=env,react --watch
// JSX - JavaScript XML

var user = {
    name: 'Sai Krishna',
    age: 27,
    job: 'Software Developer',
    location: 'Charlotte, NC'
};

var app = {
    title: 'Indecision-App',
    subTitle: 'Just some app to make decisions',
    options: ['One', 'Two']
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    } else {
        return 'Unknown';
    }
}

var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subTitle && React.createElement(
        'h2',
        null,
        app.subTitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
        'p',
        null,
        'Name: ',
        user.name ? user.name : 'Anonymous'
    ),
    React.createElement(
        'p',
        null,
        'Job: ',
        user.job
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location),
    React.createElement(
        'ul',
        null,
        React.createElement(
            'li',
            null,
            'HTML 5'
        ),
        React.createElement(
            'li',
            null,
            'CSS'
        )
    )
);
var appRoute = document.getElementById('app');

ReactDOM.render(template2, appRoute);
