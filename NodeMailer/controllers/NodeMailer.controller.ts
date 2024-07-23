import { NextFunction, Request, Response } from "express";
import debug from "debug";
import nodemailer from "nodemailer";

const log: debug.IDebugger = debug("app:Nodemailer-controller");

class NodeMailerController {
    async sendMail(req: Request, res: Response, next: NextFunction) {
        try {
            log("nodemailer api start");
            const mailOptions = {
                from: "darkl3on22@gmail.com",
                to: req.body.to,
                subject: "Sending Email using Nodemailer",
                html: req.body.html,
            };
            const transporter = nodemailer.createTransport({
                service: "Gmail",
                host: "smtp.gmail.com",
                port: 465,
                auth: {
                    user: "darkl3on22@gmail.com",
                    pass: "sjkoywyejyrqgcas",
                },
            });
            transporter.verify((error, success) => {
                error ? log("Verification error", error) : log("Server is ready to take messages");
            });
            transporter.sendMail(mailOptions, (err, info) => {
                err ? res.status(400).send(err) : res.status(200).send(info.response) ;
            });
        } catch (err: any) {
            log("!!!err", err);
            res.status(404).send({ error: { message: err.message } });
        }
    }
}

export default new NodeMailerController();