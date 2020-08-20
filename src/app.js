const express = require("express");
const cors = require("cors");
const { uuid } = require("uuidv4");

// const { v4: uuid } = require('uuid');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {



    return response.json(repositories);  
  
});

app.post("/repositories", (request, response) => {

   const {title, url, techs} = request.body;
   
   const repository = {id: uuid(), title: title,url: url, techs: techs};

        repositories.push(repository);

   return response.json({repository});

});

app.put("/repositories/:id", (request, response) => {

  const { id } = request.params;

  const {title, url, techs} = request.body;

  const repositoryIndex = repositories.findIndex(repo => repo.id === id);

  const repository = [
    title,
    url,
    techs
  ]


  return response.json({repository});





  // TODO
});

app.delete("/repositories/:id", (request, response) => {

    const { id } = request.params;


  // TODO
});

app.post("/repositories/:id/like", (request, response) => {

  const { id } = request.params;
  // TODO
});

module.exports = app;
