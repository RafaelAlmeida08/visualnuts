import { CountryHighestLanguagesService } from "./CountryHighestLanguagesService";

describe("Country with the highest number of official languages", () => {
    let service: CountryHighestLanguagesService;

    beforeAll(() => {
        service = new CountryHighestLanguagesService();       
    });

    it("Should return an object with country data", async() => {                
        const result = await service.execute();
        expect(result).toEqual(expect.any(Object))
    });
    
});
