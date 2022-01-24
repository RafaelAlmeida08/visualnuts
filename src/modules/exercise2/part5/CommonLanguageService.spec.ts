import { CommonLanguageService } from "./CommonLanguageService";

describe("The most common official language(s), of all countries", () => {
    let service: CommonLanguageService;

    beforeAll(() => {
        service = new CommonLanguageService();       
    });

    it("Should return a string with the language", async() => {                
        const result = await service.execute();
        expect(result).toEqual(expect.any(Object))
    });
    
});
