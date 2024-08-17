import { useEffect, useState } from 'react';

interface ProgressBarProps {
    usedPercentage: number;
}

const ProgressBar = ({ usedPercentage }: ProgressBarProps) => {
    const [formattedPercentage, setFormattedPercentage] = useState<string>(
        usedPercentage.toFixed(0)
    );
    const [progressBarColor, setProgressBarColor] = useState<string>('');

    const getProgressBarColor = (percentage: number) => {
        if (percentage < 70) return 'bg-blue-500';
        if (percentage < 80) return 'bg-yellow-500';
        return 'bg-red-500';
    };

    useEffect(() => {
        setProgressBarColor(getProgressBarColor(usedPercentage));
    }, [usedPercentage]);

    return (
        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-3">
            <div
                className={`${progressBarColor} font-medium text-blue-100 text-center p-0.5 leading-none rounded-full`}
                style={{
                    width: `${formattedPercentage}%`,
                    fontSize: usedPercentage > 10 ? '0.75rem' : '0.6rem',
                    lineHeight: '1.2rem',
                }}
            >
                {formattedPercentage}%
            </div>
        </div>
    );
};

export default ProgressBar;
