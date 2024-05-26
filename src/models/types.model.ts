export type Segnalazione = {
    id?: number,
    description: string,
    date: Date,
    cliente: Cliente,
    tecnico: Tecnico
}

export type Cliente = {
    id?: number,
    name: string,
    surname: string,
    email: string
}

export type Tecnico = {
    id?: number,
    name: string,
    surname: string,
}