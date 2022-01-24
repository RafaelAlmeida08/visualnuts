import { PrintNumbersService } from "./PrintNumbersService"

describe("Print Numbers and Words", () => {
    let service: PrintNumbersService;

    beforeAll(() => {
        service = new PrintNumbersService();       
    });

    it("Should return an array with datas", async() => {        
        const target = 100;
        const numbers = await service.execute(target);        
        expect(numbers).not.toEqual([])
    });
    
    it("Should not be able to send a number less then 1", async () => {
        const target = 0;
        await expect(service.execute(target)).rejects.toEqual(new Error("You can't post a target less then 1"));
    })
});