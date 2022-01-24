import { TotalCountriesController } from "./TotalCountriesController";
import { TotalCountriesService } from "./TotalCountriesService";

export const totalCountriesFactory = () => {
    const totalCountriesService = new TotalCountriesService();
    const totalCountriesController = new TotalCountriesController(totalCountriesService);
    return totalCountriesController;
}