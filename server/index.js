import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../src/App";
import express from "express";
import path from "path";

const PORT = process.env.PORT || 9000;
const app = express();

app.get("/", (req, res) => {
    const app = ReactDOMServer.renderToString(<App />);
    const html = `
        <html>
        <head>
            <title>my_profile</title>
            <link rel="stylesheet" href="/styles.css" type="text/css"/>
        </head>
        <body>
            <div id="root">${app}</div>
            <script src="/main.js"></script>
        </body>
        </html>
        `;
        
    res.send(html);
});

app.use(express.static(path.resolve(__dirname, "../dist")));

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });