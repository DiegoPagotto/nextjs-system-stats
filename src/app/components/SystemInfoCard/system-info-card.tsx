import SystemComponent from "../SystemComponent/system-component";

const SystemInfoCard = () => {

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-900">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center">System Stats</div>
            </div>

            <SystemComponent title="CPU" description="Intel Core i7-7700K 4.2GHz" />

        </div>
    );
};
export default SystemInfoCard;