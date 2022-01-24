export class PrintNumbersService {
    async execute(target : number): Promise<any>{
        const initial = 1;

        if(target < 1 ){
            throw new Error("You can't post a target less then 1");
        } 
 
        let numbers: Array<string | number> = [];

        const insertValues = (value: string | number) => {
            numbers.push(value);
        };

        for( let i = initial; i <= target; i++ ){
            if( i % 3 == 0 && i % 5 == 0 ) {
                insertValues('Visual Nuts')               
            }else if( i % 3 == 0 ){
                insertValues('Visual')               
            }else if( i % 5 == 0 ){
                insertValues('Nuts')               
            }else{
                insertValues(i)                
            }
        }        
        return numbers;
    }
}
