import { Request, Response } from "express";
import { TotalLanguagesService } from "./TotalLanguagesService";

export class TotalLanguagesController {
    constructor(private service: TotalLanguagesService){}

    async handle(request: Request, response: Response){        
        const total = await this.service.execute();
        return response.status(200).json({Total: total});
    }
}
