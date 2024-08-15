export const bytesToGigaBytes = (bytes: number) => {
    return (bytes / 1024 ** 3).toFixed(2);
};

export const calculateUsedPercentage = (
    used: number,
    total: number
): number => {
    return Math.round((used / total) * 100);
};
