import { CountryGermanService } from "./CountryGermanService";

describe("Country with the most official languages, where they officially speak German ", () => {
    let service: CountryGermanService;

    beforeAll(() => {
        service = new CountryGermanService();       
    });

    it("Should return an object with country data", async() => {                
        const result = await service.execute();
        expect(result).toEqual(expect.any(Object))
    });
    
});
