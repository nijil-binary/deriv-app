import { localize } from '@deriv/translations';

export const getCardLabels = () => ({
    STAKE: localize('Stake:'),
    CURRENT_STAKE: localize('Current stake:'),
    DEAL_CANCEL_FEE: localize('Deal cancel. fee:'),
    TAKE_PROFIT: localize('Take profit:'),
    BUY_PRICE: localize('Buy price:'),
    STOP_LOSS: localize('Stop loss:'),
    TOTAL_PROFIT_LOSS: localize('Total profit/loss:'),
    PROFIT_LOSS: localize('Profit/Loss:'),
    POTENTIAL_PROFIT_LOSS: localize('Potential profit/loss:'),
    INDICATIVE_PRICE: localize('Indicative price:'),
    PAYOUT: localize('Payout:'),
    PURCHASE_PRICE: localize('Purchase price:'),
    POTENTIAL_PAYOUT: localize('Potential payout:'),
    TICK: localize('Tick '),
    WON: localize('Won'),
    LOST: localize('Lost'),
    DAYS: localize('Days'),
    DAY: localize('Day'),
    SELL: localize('Sell'),
});

export const getUnsupportedContracts = () => ({
    EXPIRYMISS: {
        name: localize('Ends Outside'),
        position: 'top',
    },
    EXPIRYRANGE: {
        name: localize('Ends Between'),
        position: 'bottom',
    },
    RANGE: {
        name: localize('Stays Between'),
        position: 'top',
    },
    UPORDOWN: {
        name: localize('Goes Outside'),
        position: 'bottom',
    },
    RESETCALL: {
        name: localize('Reset Call'),
        position: 'top',
    },
    RESETPUT: {
        name: localize('Reset Put'),
        position: 'bottom',
    },
    TICKHIGH: {
        name: localize('High Tick'),
        position: 'top',
    },
    TICKLOW: {
        name: localize('Low Tick'),
        position: 'bottom',
    },
    ASIANU: {
        name: localize('Asian Up'),
        position: 'top',
    },
    ASIAND: {
        name: localize('Asian Down'),
        position: 'bottom',
    },
    LBFLOATCALL: {
        name: localize('Close-to-Low'),
        position: 'top',
    },
    LBFLOATPUT: {
        name: localize('High-to-Close'),
        position: 'top',
    },
    LBHIGHLOW: {
        name: localize('High-to-Low'),
        position: 'top',
    },
    CALLSPREAD: {
        name: localize('Spread Up'),
        position: 'top',
    },
    PUTSPREAD: {
        name: localize('Spread Down'),
        position: 'bottom',
    },
    RUNHIGH: {
        name: localize('Only Ups'),
        position: 'top',
    },
    RUNLOW: {
        name: localize('Only Downs'),
        position: 'bottom',
    },
});

export const getSupportedContracts = is_high_low => ({
    CALL: {
        name: is_high_low ? localize('Higher') : localize('Rise'),
        position: 'top',
    },
    PUT: {
        name: is_high_low ? localize('Lower') : localize('Fall'),
        position: 'bottom',
    },
    CALLE: {
        name: localize('Rise'),
        position: 'top',
    },
    PUTE: {
        name: localize('Fall'),
        position: 'bottom',
    },
    DIGITMATCH: {
        name: localize('Matches'),
        position: 'top',
    },
    DIGITDIFF: {
        name: localize('Differs'),
        position: 'bottom',
    },
    DIGITEVEN: {
        name: localize('Even'),
        position: 'top',
    },
    DIGITODD: {
        name: localize('Odd'),
        position: 'bottom',
    },
    DIGITOVER: {
        name: localize('Over'),
        position: 'top',
    },
    DIGITUNDER: {
        name: localize('Under'),
        position: 'bottom',
    },
    ONETOUCH: {
        name: localize('Touch'),
        position: 'top',
    },
    NOTOUCH: {
        name: localize('No Touch'),
        position: 'bottom',
    },
    MULTUP: {
        name: localize('Up'),
        position: 'top',
    },
    MULTDOWN: {
        name: localize('Down'),
        position: 'bottom',
    },
});

export const getContractConfig = is_high_low => ({
    ...getSupportedContracts(is_high_low),
    ...getUnsupportedContracts(),
});

export const getContractTypeDisplay = (type, is_high_low = false) =>
    getContractConfig(is_high_low)[type] ? getContractConfig(is_high_low)[type.toUpperCase()].name : '';