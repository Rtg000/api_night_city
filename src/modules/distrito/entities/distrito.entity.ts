import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('Distrito')
export class Distrito {

    @PrimaryColumn()
    id: string;

    @Column()
    nombre: string;

    @Column('varchar',{
        nullable: true,
        array: true
    })
    subdistrito: string[];

}
