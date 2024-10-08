import React from 'react';
import { useTelegram } from '../../hooks/useTelegram';

const Header = () => {
    const { user} = useTelegram()

    return (
        <div className={'header'}>
            <Button onClick={onClose}>закрытb</Button>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    );
};
export default Header;