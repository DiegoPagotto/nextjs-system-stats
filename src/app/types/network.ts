export interface NetworkInterface {
    iface: string;
    ip4: string;
    mac: string;
    speed: number;
}

export interface NetworkStats {
    iface: string;
    rx: number;
    tx: number;
}

export interface NetworkData {
    interfaces: NetworkInterface[];
    stats: NetworkStats[];
}
