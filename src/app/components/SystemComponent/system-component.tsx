import React from 'react';

interface SystemComponentProps {
    title: string;
    description?: string;
    children?: React.ReactNode;
}

const SystemComponent = ({
    title,
    description,
    children,
}: SystemComponentProps) => {
    return (
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-500 text-base">{children || description}</p>
        </div>
    );
};
export default SystemComponent;
