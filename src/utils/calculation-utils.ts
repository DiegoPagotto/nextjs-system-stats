export const bytesToGigaBytes = (bytes: number) => {
    return (bytes / 1024 ** 3).toFixed(2);
};

export const calculateUsedPercentage = (
    used: number,
    total: number
): number => {
    return Math.round((used / total) * 100);
};

export const getFormattedUptime = (uptime: number) => {
    const days = Math.floor(uptime / (3600 * 24));
    const hours = Math.floor((uptime % (3600 * 24)) / 3600);
    const minutes = Math.floor((uptime % 3600) / 60);
    const seconds = Math.floor(uptime % 60);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};
