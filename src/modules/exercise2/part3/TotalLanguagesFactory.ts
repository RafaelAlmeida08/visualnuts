import { TotalCountriesController } from "../part1/TotalCountriesController";
import { TotalLanguagesService } from "./TotalLanguagesService";

export const totalLanguagesFactory = () => {
    const totalLanguagesService = new TotalLanguagesService();
    const totalLanguagesController = new TotalCountriesController(totalLanguagesService);
    return totalLanguagesController;
}
