import { OSDetect } from '@deriv/shared/utils/os';

const getPlatformMt5DownloadLink = () => {
    switch (OSDetect()) {
        case 'windows':
            return 'https://s3.amazonaws.com/binary-mt5/binarycom_mt5.exe';
        case 'linux':
            return 'https://www.metatrader5.com/en/terminal/help/start_advanced/install_linux';
        case 'mac':
            return 'https://deriv.s3-ap-southeast-1.amazonaws.com/deriv-mt5.dmg';
        case 'ios':
            return 'https://download.mql5.com/cdn/mobile/mt5/ios?server=Binary.com-Server';
        case 'android':
            return 'https://download.mql5.com/cdn/mobile/mt5/android?server=Binary.com-Server';
        default:
            return 'https://trade.mql5.com/trade?servers=Binary.com-Server&trade_server=Binary.com-Server'; // Web
    }
};

const getMT5WebTerminalLink = category => {
    switch (category) {
        case 'demo':
            return 'https://trade.mql5.com/trade?servers=Binary.com-Demo&trade_server=Binary.com-Demo';
        default:
            return 'https://trade.mql5.com/trade?servers=Binary.com-Server&trade_server=Binary.com-Server'; // Real
    }
};

export { getPlatformMt5DownloadLink, getMT5WebTerminalLink };
