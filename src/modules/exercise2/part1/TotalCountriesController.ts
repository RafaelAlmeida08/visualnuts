import { Request, Response } from "express";
import { TotalCountriesService } from "./TotalCountriesService";

export class TotalCountriesController {
    constructor(private service: TotalCountriesService ){}

    async handle(request: Request, response: Response){       
        const total = await this.service.execute();
        return response.status(200).json({total: total});
    }
}
