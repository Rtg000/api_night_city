import { Choomba } from "src/modules/choomba/entities/choomba.entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity('Gang')
export class Gang {

    @PrimaryColumn()
    id: string;

    @Column()
    nombre: string;

    @OneToMany(
        () => Choomba,
        (choomba) => choomba.gang,
    )
    choombas?: Choomba[];

}
