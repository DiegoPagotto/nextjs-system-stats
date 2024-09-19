export const bytesToGigaBytes = (bytes: number) => {
    return (bytes / 1024 ** 3).toFixed(2);
};

export const calculateUsedPercentage = (
    used: number,
    total: number
): number => {
    return Math.round((used / total) * 100);
};

export const getFormattedUptime = (uptimeInSeconds: number) => {
    const days = Math.floor(uptimeInSeconds / (3600 * 24));
    const hours = Math.floor((uptimeInSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((uptimeInSeconds % 3600) / 60);
    const seconds = Math.floor(uptimeInSeconds % 60);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};
