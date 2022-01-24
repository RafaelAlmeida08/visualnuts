import { ICountry } from "../../../interfaces/country.interface";
import { data } from "../../../utils/data";

export class CountryGermanService {
    async execute(): Promise<ICountry>{
        const language_target = 'de';

        const filter = data.filter( data => data.languages.some ( lang => lang === language_target ));
        
        const country = filter.sort((a, b) => (a.languages.length < b.languages.length) ? 1 : -1);      

        return country[0];  
    }
}
