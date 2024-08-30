export interface disk {
    device: string;
    type: string;
    name: string;
    size: number;
    vendor: string;
    used: number;
    available: number;
    mount: string;
}
