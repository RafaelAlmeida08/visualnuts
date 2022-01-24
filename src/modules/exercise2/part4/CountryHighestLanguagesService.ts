import { ICountry } from "../../../interfaces/country.interface";
import { data } from "../../../utils/data";

export class CountryHighestLanguagesService{
    async execute(): Promise<ICountry>{
        const country = data.sort((a, b) => (a.languages.length < b.languages.length) ? 1 : -1)
        return country[0];
    }
}
