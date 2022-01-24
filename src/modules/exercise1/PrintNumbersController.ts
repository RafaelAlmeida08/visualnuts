import { Request, Response } from "express";
import { PrintNumbersService } from "./PrintNumbersService";

export class PrintNumbersController {
    constructor( private printNumbers: PrintNumbersService ){}
    
    async handle(request: Request, response: Response) {     
        const { target } = request.body;  
        const print = await this.printNumbers.execute(target);
        return response.status(200).json(print);
    }
}
