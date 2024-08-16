const Loading = () => {
    const LoadingFragment = () => {
        return (
            <>
                <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="h-5 bg-slate-700 rounded col-span-2"></div>
                        <div className="h-5 bg-slate-700 rounded col-span-1"></div>
                    </div>
                    <div className="h-5 bg-slate-700 rounded"></div>
                </div>
                <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="h-5 bg-slate-700 rounded col-span-1"></div>
                        <div className="h-5 bg-slate-700 rounded col-span-2"></div>
                    </div>
                    <div className="h-5 bg-slate-700 rounded"></div>
                </div>
            </>
        );
    };

    return (
        <div className="shadow rounded-md p-6 w-full mx-auto">
            <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-6 py-1">
                    <div className="h-12 bg-slate-700 rounded w-2/3 mx-auto"></div>
                    {[...Array(5)].map((_, index) => (
                        <LoadingFragment key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Loading;
