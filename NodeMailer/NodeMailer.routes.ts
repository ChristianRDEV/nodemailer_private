import express from "express";
import { CommonRoutesConfig } from "../common/common.routes.config";
import NodeMailerController from "./controllers/NodeMailer.controller";

class NodemailerRoutes extends CommonRoutesConfig {
    constructor(name: string) {
        super(name, express.Router());
    }

    configureRoute(): void {
        this.getRouter
        .route("/")
        .get(NodeMailerController.sendMail);
    }
}

export default NodemailerRoutes;