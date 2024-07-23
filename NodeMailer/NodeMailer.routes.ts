import express from "express";
import { CommonRoutesConfig } from "../common/common.routes.config";
import NodeMailerController from "./controllers/NodeMailer.controller";
import { body } from "express-validator";
import validationMiddleware from "../common/middleware/validation.middleware";

class NodemailerRoutes extends CommonRoutesConfig {
    constructor(name: string) {
        super(name, express.Router());
    }

    configureRoute(): void {
        this.getRouter
        .route("/")
        .post(
            body("to").isString,
            body("html").isString,
            validationMiddleware.verifyFieldErrors,
            NodeMailerController.sendMail
        );
    }
}

export default NodemailerRoutes;