import { TotalCountriesService } from "./TotalCountriesService";

describe("Total number of countries in the world", () => {
    let service: TotalCountriesService;

    beforeAll(() => {
        service = new TotalCountriesService();       
    });

    it("Should return the number of countries", async() => { 
        const total = await service.execute();        
        expect(total).toEqual(expect.any(Number))
    });
});
