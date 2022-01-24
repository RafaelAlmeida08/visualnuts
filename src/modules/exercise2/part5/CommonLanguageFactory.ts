import { CommonLanguageController } from "./CommonLanguageController";
import { CommonLanguageService } from "./CommonLanguageService";

export const commonLanguageFactory = () => {
    const commonLanguageService = new CommonLanguageService();
    const commonLanguageController = new CommonLanguageController(commonLanguageService);
    return commonLanguageController;
}
