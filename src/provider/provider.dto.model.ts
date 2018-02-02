import { IsString, IsInt, Length } from 'class-validator';

export class ProviderDTO {
    private  id: number;
    
    @IsString()
    @Length(10, 20)
    private  name: string;        

     public constructor(id: number, name: string) {
         this.id = id;
         this.name = name;
     }

     getId(): number {
         return this.id;
     }
}