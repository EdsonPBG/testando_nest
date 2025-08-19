import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export class BodyFormMiddleware implements NestMiddleware {

    use(req: Request, res: Response, next: NextFunction) {
        const { method, body } = req

        if (method === "POST" || method === "PATCH") {
            for (const value in body) {

                if (typeof body[value] === "string") {
                    body[value] = body[value].trim();
                }

                if (body[value] === "string") {
                    body[value] = null;
                    
                }

                if (body[value] === "") {
                    body[value] = null;
                }

                if (body[value] === "true") {
                    body[value] = true;
                }

                if (body[value] === "false") {
                    body[value] = false;
                }
            }
        }
        next()
    }

}