console.log('I am running');

// babel src/app.js --out-file=public/scripts/app.js --resets=env,react --watch
// JSX - JavaScript XML

var template = (
    <div>
        <h1>Indecision App</h1>
        <p>Some more info</p>
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
        </ol>
    </div>
);

var user = {
    name: 'Sai Krishna',
    job: 'Software Developer',
    location: 'Charlotte, NC'
};

var app = {
    title: 'Indecision-App',
    subTitle: 'Just some app to make decisions'
};

function getLocation(location){
    if(location){
        return location;
    } else {
        return 'Unknown'
    }
}

var template2 = (
    <div>
        <h1>{app.title}</h1>
        <h2>{app.subTitle}</h2>
        <p>Name: {user.name}</p>
        <p>Job: {user.job}</p>
        <p>Location: {getLocation(user.location)}</p>
        <ul>
            <li>HTML 5</li>
            <li>CSS</li>
        </ul>
    </div>
);
var appRoute = document.getElementById('app');

ReactDOM.render(template2, appRoute);