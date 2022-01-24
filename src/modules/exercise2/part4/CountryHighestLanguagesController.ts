import { Request, Response } from "express";
import { CountryHighestLanguagesService } from "./CountryHighestLanguagesService";

export class CountryHighestLanguagesController {
    constructor(private service: CountryHighestLanguagesService){}
    
    async handle(request: Request, response: Response){        
        const list = await this.service.execute();
        return response.status(200).json(list);
    }
}
