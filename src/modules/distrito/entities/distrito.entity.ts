import { Fixer } from "src/modules/fixer/entities/fixer.entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

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

    @Column()
    img: string;

    @OneToMany(
        () => Fixer,
        (fixer) => fixer.distrito,
    )
    fixers?: Fixer[];

}
