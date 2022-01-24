import { PrintNumbersController } from "./PrintNumbersController";
import { PrintNumbersService } from "./PrintNumbersService"

export const printNumbersFactory = () => {
    const printNumbersService = new PrintNumbersService();
    const printNumbersController = new PrintNumbersController(printNumbersService);
    return printNumbersController;
}