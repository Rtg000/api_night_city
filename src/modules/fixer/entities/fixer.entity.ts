import { Distrito } from "src/modules/distrito/entities/distrito.entity";
import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";

@Entity('Fixer')
export class Fixer {

    @PrimaryColumn()
    id: string;

    @Column()
    nombre: string;
 
    @Column('int',{
        nullable: true
    })
    edad: number;

    @Column()
    img: string;

    @ManyToOne(
        () => Distrito,
        (distrito) => distrito.fixers,
        {nullable: true}
    )
    distrito?: Distrito | null;

}
