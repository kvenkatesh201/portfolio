import express from 'express';
import cors from 'cors'
import https from 'https'
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './client/app';
import Html from './client/html';
import serialize from 'serialize-javascript';
import { matchPath } from 'react-router-dom';
import routes from './shared/routes'
import { StaticRouter } from 'react-router-dom'

const port = 3000;
const server = express();
server.use(cors())
server.use(express.static('public'));

server.get('*', (req, res) => {
  const activeRoute = routes.find((route)=>matchPath(req.url,route)) || {};

  const body = renderToString(
    <StaticRouter location={req.url} context={{}}>
        <App />
    </StaticRouter>
  );

  res.send(
    Html({
      body,
      initialState: serialize({})
    })
  );
});

server.listen(port);
console.log(`Serving at http://localhost:${port}`);