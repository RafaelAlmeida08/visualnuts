import { Request, Response } from "express";
import { CommonLanguageService } from "./CommonLanguageService";

export class CommonLanguageController{
    constructor(private service: CommonLanguageService){}

    async handle(request: Request, response: Response){        
        const language = await this.service.execute();
        return response.status(200).json(language);
    }
}
