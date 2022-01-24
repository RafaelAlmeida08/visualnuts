import { CountryHighestLanguagesController } from "./CountryHighestLanguagesController";
import { CountryHighestLanguagesService } from "./CountryHighestLanguagesService";

export const countryHighestLanguagesFactory = () => {
    const countryHighestLanguagesService = new CountryHighestLanguagesService();
    const countryHighestLanguagesController = new CountryHighestLanguagesController(countryHighestLanguagesService);
    return countryHighestLanguagesController;
}
