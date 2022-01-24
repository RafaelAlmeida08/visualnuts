import { Request, Response } from "express";
import { CountryGermanService } from "./CountryGermanService";

export class CountryGermanController {
    constructor(private service: CountryGermanService){}

    async handle(request: Request, response: Response) {       
        const country = await this.service.execute();
        return response.status(200).json(country);
    }
}
