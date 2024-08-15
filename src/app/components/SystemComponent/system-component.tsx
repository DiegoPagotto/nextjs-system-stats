interface SystemComponentProps {
    title: string;
    description: string;
};

const SystemComponent = ({ title, description }: SystemComponentProps) => {
    return (
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-500 text-base">
                {description}
            </p>
        </div>
    );
};
export default SystemComponent;