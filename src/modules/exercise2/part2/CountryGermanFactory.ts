import { CountryGermanController } from "./CountryGermanController";
import { CountryGermanService } from "./CountryGermanService";

export const countryGermanFactory = () => {
    const countryGermanService = new CountryGermanService();
    const countryGermanController = new CountryGermanController(countryGermanService);
    return countryGermanController;
}
