import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('Gang')
export class Gang {

    @PrimaryColumn()
    id: string;

    @Column()
    nombre: string;

}
