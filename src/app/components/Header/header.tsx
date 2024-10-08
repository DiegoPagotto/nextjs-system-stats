import { Emojis } from '@/app/enums/emojis';
import { SystemInfo } from '@/app/types/system-info';
import { getFormattedUptime } from '@/utils/calculation-utils';

interface HeaderProps {
    systemInfo: SystemInfo | null;
}

const Header = ({ systemInfo }: HeaderProps) => {
    return (
        <div className="px-6 py-4 mb-4 bg-slate-900 rounded-xl min-w-56">
            <div className="font-bold text-xl mb-2 text-center">
                {Emojis.Stats} System Stats
            </div>
            <div className="text-center shadow-sm">
                {systemInfo ? (
                    <p className="text-sm font-light text-gray-400 italic">
                        <b>{Emojis.Uptime} Uptime</b>: {` `}
                        {getFormattedUptime(systemInfo.uptimeInSeconds)}
                    </p>
                ) : (
                    <div className="animate-pulse h-5 bg-slate-700 rounded"></div>
                )}
            </div>
        </div>
    );
};

export default Header;
