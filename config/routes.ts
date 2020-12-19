import * as testController from "../controllers/testController";
import express, { application, Router } from "express";


export const testRoutes = function (app: express.Application) {
    app.get("/test", testController.test)
}



