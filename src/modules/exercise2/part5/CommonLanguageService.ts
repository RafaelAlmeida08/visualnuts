import { data } from "../../../utils/data";

export class CommonLanguageService {
    async execute(): Promise<object>{

        let languages: Array<string> = [];        

        data.forEach(element => {
            element.languages.forEach( language => {
                languages.push(language);
            })
        });

        const hashmap = languages.reduce( (acc: any, val: string) => {  
            acc[val] = (acc[val] || 0 ) + 1
            return acc
        },{});

        const objects =  Object.entries(hashmap).sort((a: any,b: any) => -(a[1]-b[1])).reduce((acc, [a,b]) => {acc[a] = b;return acc},{});       
       
        const numbers: Array<number> = Object.values(objects);
        const maxValue = Math.max(...numbers);
        const result = Object.entries(objects).reduce((newObj, [key, value]) => {
            if (value === maxValue) {
              return { ...newObj, [key]: value };
            }
            return { ...newObj };
        }, {});
          
        return result;
    }
}
