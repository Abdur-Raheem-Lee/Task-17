const express = require('express');
const app = express();
const projectArr = require('./src/Projects.json');
const fileHandler = require('fs');
const cors = require('cors');
const helmet = require('helmet');
app.use(helmet());
app.use(cors());

// GET Request to fetch and display the information in the JSON file
app.get('/api', function(req, res) {

    // Using the variable which has the "fs" require to read the file
    fileHandler.readFile('src/Projects.json', (err, data) => {
        if (err) res.send('File not found. First post to create file.');
        else {

            // Sending the information to Postman
            res.send(`${data}`);
        };
    });
});

// POST Request which is used to add new projects/objects to the Projects.json file
app.post('/api', (req, res) => {

    // newEntry stores the new project/obects information
    let newEntry = {

        // Automatically inserting an id so that the user does not enter an id. If they wish to see the ID of a specific project/object they can use the "GET" Request
        id: `${ projectArr.length + 1 }`,

        // The title, description adn URL are added by the user and a query is used to get this information
        title: `${ req.query.title }`,
        description: `${ req.query.desc }`,
        URL: `${req.query.URL }`
    };

    // Pushing the new information stored in "newEntry" into the array of projects/objects
    projectArr.push(newEntry);

    // Rewriting the array so that the updated file can be seen when a "GET" request is sent
    fileHandler.writeFile('src/Projects.json', JSON.stringify(projectArr), (err) => {
        if (err) throw err;
        res.send('Item was added to file!');
    });
});

// POST Request which is used to remove projects/objects from the Projects.json file
app.delete('/api', (req, res) => {

    // "removeEntry" is a variable which stores the "id" of the project/object the user wishes to remove
    let removeEntry = req.query.id;

    // "removeEntry" is used to splice/remove the project/object from the array/Projects.json file
    projectArr.splice(removeEntry - 1, 1);

    // Rewriting the array so that the updated file can be seen when a "GET" request is sent
    fileHandler.writeFile('src/Projects.json', JSON.stringify(projectArr), (err) => {
        if (err) throw err;
        res.send('Item was removed from file!');
    });
});

// PUT Request which is used to update the "title"/"description" within the objects inside the Projects.json file
app.put('/api', (req, res) => {
    if (req.query.title) {

        // Using the "id" to get the specific project/object which the user is looking for so that the title can be changed
        let id = req.query.id;
        let updateTitle = req.query.title;
        projectArr[id - 1].title = updateTitle;

        // Rewriting the array so that the updated file can be seen when a "GET" request is sent
        fileHandler.writeFile('src/Projects.json', JSON.stringify(projectArr), (err) => {
            if (err) throw err;
            res.send('File updated!');
        });

    } else if (req.query.desc) {

        // Using the "id" to get the specific project/object which the user is looking for so that the description can be changed
        let id = req.query.id;
        let updateDesc = req.query.desc;
        projectArr[id - 1].description = updateDesc;

        // Rewriting the array so that the updated file can be seen when a "GET" request is sent
        fileHandler.writeFile('src/Projects.json', JSON.stringify(projectArr), (err) => {
            if (err) throw err;
            res.send('File updated!');
        });
    };
});

// This catches any route that the projectName types in that is not one that we have
app.get('*', function(req, res, next) {
    let err = new Error('Page Not Found');
    err.statusCode = 404;
    next(err);
});

console.log('The value of process.env is:', process.env);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});