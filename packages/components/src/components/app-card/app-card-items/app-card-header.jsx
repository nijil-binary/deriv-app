import classNames from 'classnames';
import React from 'react';
import Icon from '../../icon';
import Text from '../../text';

const AppCardHeader = ({ getCardLabels, is_swap_free, onAddRealClick }) => (
    <div className='dc-app-card-header__wrapper'>
        <div className='dc-app-card-header__container'>
            <div className={classNames('dc-app-card__badge', 'dc-app-card-header__badge--demo')}>
                <Text color='general' size='xxxxs' weight='bold'>
                    {getCardLabels().DEMO}
                </Text>
            </div>
            {is_swap_free && (
                <div className={classNames('dc-app-card__badge', 'dc-app-card-header__badge--swap-free')}>
                    <Text color='colored-background' size='xxxxs' weight='bold'>
                        {getCardLabels().SWAP_FREE}
                    </Text>
                </div>
            )}
        </div>
        <div
            className={classNames('dc-app-card__badge', 'dc-app-card-header__badge--add-real')}
            onClick={onAddRealClick}
        >
            <Icon
                className='dc-app-card-header__badge--add-real-icon'
                icon='IcAddRounded'
                custom_color='var(--icon-dark-background)'
                size={8}
            />
            <Text
                className='dc-app-card-header__badge--add-real-text'
                color='colored-background'
                size='xxxs'
                weight='bold'
            >
                {getCardLabels().ADD_REAL}
            </Text>
        </div>
    </div>
);

export default AppCardHeader;
