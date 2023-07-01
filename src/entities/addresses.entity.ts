import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import User from "./users.entity";

enum States {
    ACRE_AC = "AC",
    ALAGOAS_AL = "AL",
    AMAPA_AP = "AP",
    AMAZONAS_AM = "AM",
    BAHIA_BA = "BA",
    CEARA_CE = "CE",
    DISTRITO_FEDERAL_DF = "DF",
    ESPIRITO_SANTO_ES = "ES",
    GOIAS_GO = "GO",
    MARANHAO_MA = "MA",
    MATO_GROSSO_MT = "MT",
    MATO_GROSSO_DO_SUL_MS = "MS",
    MINAS_GERAIS_MG = "MG",
    PARA_PA = "PA",
    PARAIBA_PB = "PB",
    PARANA_PR = "PR",
    PERNAMBUCO_PE = "PE",
    PIAUI_PI = "PI",
    RIO_DE_JANEIRO_RJ = "RJ",
    RIO_GRANDE_DO_NORTE_RN = "RN",
    RIO_GRANDE_DO_SUL_RS = "RS",
    RONDONIA_RO = "RO",
    RORAIMA_RR = "RR",
    SANTA_CATARINA_SC = "SC",
    SAO_PAULO_SP = "SP",
    SERGIPE_SE = "SE",
    TOCANTINS_TO = "TO"
}
@Entity("adresses")
class Address {

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ length: 8 })
    cep: string 

    @Column({ length: 2, enum: [States.ACRE_AC, States.ALAGOAS_AL, States.AMAPA_AP, States.AMAZONAS_AM, States.BAHIA_BA, States.CEARA_CE, States.DISTRITO_FEDERAL_DF, States.ESPIRITO_SANTO_ES, States.GOIAS_GO, States.MARANHAO_MA, States.MATO_GROSSO_DO_SUL_MS, States.MATO_GROSSO_MT, States.MINAS_GERAIS_MG, States.PARAIBA_PB, States.PARANA_PR, States.PARA_PA, States.PERNAMBUCO_PE, States.PIAUI_PI, States.RIO_DE_JANEIRO_RJ, States.RIO_GRANDE_DO_NORTE_RN, States.RIO_GRANDE_DO_SUL_RS, States.RONDONIA_RO, States.RORAIMA_RR, States.SANTA_CATARINA_SC, States.SAO_PAULO_SP, States.SERGIPE_SE, States.TOCANTINS_TO], default: States.ACRE_AC })
    uf: States

    @Column({ length: 50 })
    city: string 

    @Column({ length: 255 })
    street: string 

    @Column({ length: 10 })
    number: string 

    @Column({ type: "text", nullable: true})
    complement: string | null

    @OneToOne(() => User, { onDelete: 'CASCADE' })
    @JoinColumn()
    user: User | number
}

export { Address, States }


