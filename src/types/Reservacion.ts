export interface Reservacion {
    id: string;
    clienteId: string;
    propiedadId: string;
    fechaInicio: string;
    fechaFin: string;
    estado: string;
    total: number;
}
