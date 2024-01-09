import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('Corpo')
export class Corpo {

    @PrimaryColumn()
    id: string;

    @Column()
    nombre: string

}
