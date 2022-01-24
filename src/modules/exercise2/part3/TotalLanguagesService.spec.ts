import { TotalCountriesService } from "../part1/TotalCountriesService";

describe("Total of languages spoken", () => {
    let service: TotalCountriesService;

    beforeAll(() => {
        service = new TotalCountriesService();       
    });

    it("Should return a number of languages", async() => {                
        const result = await service.execute();
        expect(result).toEqual(expect.any(Number))
    });
    
});
