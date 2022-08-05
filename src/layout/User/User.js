import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import USERS from '../../common/data/userDummyData';
import { demoPages } from '../../menu';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../components/bootstrap/Dropdown';
import Button from '../../components/bootstrap/Button';
import useDarkMode from '../../hooks/useDarkMode';

export const UserAvatar = ({ srcSet, src }) => {
	return (
		<div className='user-avatar'>
			<img srcSet={srcSet} src={src} alt='Avatar' width={128} height={128} />
		</div>
	);
};
UserAvatar.propTypes = {
	src: PropTypes.string.isRequired,
	srcSet: PropTypes.string,
};
UserAvatar.defaultProps = {
	srcSet: null,
};

const User = () => {
	const navigate = useNavigate();
	const { darkModeStatus, setDarkModeStatus } = useDarkMode();

	return (
		<Dropdown>
			<DropdownToggle hasIcon={false}>
				<div className='user'>
					<UserAvatar srcSet={USERS.JOHN.srcSet} src={USERS.JOHN.src} />
					<div className='user-info'>
						<div className='user-name'>{`${USERS.JOHN.name} ${USERS.JOHN.surname}`}</div>
						<div className='user-sub-title'>{USERS.JOHN.position}</div>
					</div>
				</div>
			</DropdownToggle>
			<DropdownMenu>
				<DropdownItem>
					<Button
						icon='AccountBox'
						onClick={() =>
							navigate(
								`../${demoPages.appointment.subMenu.employeeID.path}/${USERS.JOHN.id}`,
							)
						}>
						Profile
					</Button>
				</DropdownItem>
				<DropdownItem>
					<Button
						icon={darkModeStatus ? 'DarkMode' : 'LightMode'}
						onClick={() => setDarkModeStatus(!darkModeStatus)}
						aria-label='Toggle fullscreen'>
						{darkModeStatus ? 'Dark Mode' : 'Light Mode'}
					</Button>
				</DropdownItem>
				<DropdownItem isDivider />
				<DropdownItem>
					<Button icon='Logout' onClick={() => navigate(`../${demoPages.login.path}`)}>
						Logout
					</Button>
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	);
};

export default User;
