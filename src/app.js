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

function getLocation(location){
    if(location){
        return <p>Location: {location}</p>;
    } else {
        return 'Unknown'
    }
}

var template2 = (
    <div>
        <h1>{app.title}</h1>
        {app.subTitle && <h2>{app.subTitle}</h2>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <p>Name: {user.name ? user.name : 'Anonymous'}</p>
        <p>Job: {user.job}</p>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
        <ul>
            <li>HTML 5</li>
            <li>CSS</li>
        </ul>
    </div>
);
var appRoute = document.getElementById('app');

ReactDOM.render(template2, appRoute);