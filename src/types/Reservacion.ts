export interface Reservacion {
    id: number;
    clienteId: number;
    propiedadId: string;
    fechaInicio: string;
    fechaFin: string;
    estado: string;
    total: number;
}
