import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Button
} from '@chakra-ui/react';

import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import LogoutButton from '../Logout/Logout';
import { useNavigate } from 'react-router-dom';


export const DropDownMenu = function () {
  const navigate = useNavigate();
  return (
  <Menu>

    {({isOpen}) => (
      <>
        <MenuButton as={Button} rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />} width='100%'>
          Menu
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => navigate('/dashboard')}>Dashboard</MenuItem>
          <MenuItem onClick={() => navigate('/profile')}>Profile</MenuItem>
          <MenuDivider/>
          <MenuItem><LogoutButton /></MenuItem>
        </MenuList>
    </>)}
  </Menu>)
}