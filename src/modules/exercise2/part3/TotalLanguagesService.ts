import { data } from "../../../utils/data";

export class TotalLanguagesService {
    async execute(): Promise<Number>{        
        let total = new Set();

        data.forEach(element => {
            element.languages.forEach( language => {
                total.add(language)
            })
        });
        
        return total.size;
    }
}
