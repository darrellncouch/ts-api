import bodyParser, { OptionsJson } from "body-parser";
import * as router from "./config/routes";
import express, { Router } from "express";

const port = process.env.PORT ?? 8080 as number; 

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));
app.get("/", (req, res) => { res.render("index")})

const routesSetter = router.testRoutes(app);

app.listen(port, () =>{
    console.log(`Listening on port ${port}`)
})