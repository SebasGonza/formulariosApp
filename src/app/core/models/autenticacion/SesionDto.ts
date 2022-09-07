import { GenericDto } from '../genericDto';

export interface SesionDto extends GenericDto {
    id?: number;
    token?: string;
    tokenRefresh?: string;
    tokenExpira?: Date;
    tokenRefreshExpira?: null;
    ipAddress?: string;
    codigoCliente?: string;
}


