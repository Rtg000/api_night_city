import { Gang } from "src/modules/gang/entities/gang.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity('Choomba')
export class Choomba {

    @PrimaryColumn()
    id: string;

    @Column()
    nombre: string;

    @Column('int',{
        nullable: true
    })
    edad: number;

    @ManyToOne(
        () => Gang,
        (gang) => gang.choombas,
        {nullable: true}
    )
    gang?: Gang | null;

}