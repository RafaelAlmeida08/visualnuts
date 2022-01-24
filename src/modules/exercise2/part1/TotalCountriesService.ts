import { data } from "../../../utils/data";

export class TotalCountriesService {
    async execute(): Promise<Number> {        
        return data.length;
    }
}
