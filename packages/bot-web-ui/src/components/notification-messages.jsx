import classNames from 'classnames';
import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from '../stores/connect';
import '../assets/sass/notification-messages.scss';

const NotificationMessages = ({ is_drawer_open, Notifications }) => (
    <div
        className={classNames('notifications-container', {
            'notifications-container--is-panel-open': is_drawer_open,
        })}
    >
        <Notifications />
    </div>
);

NotificationMessages.propTypes = {
    is_drawer_open: PropTypes.bool,
    // Notifications       : PropTypes.node,
    notifications_length: PropTypes.number,
};

export default connect(({ core, run_panel }) => ({
    is_drawer_open: run_panel.is_drawer_open,
    Notifications: core.ui.notification_messages_ui,
}))(NotificationMessages);
