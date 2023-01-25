import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Button
} from '@chakra-ui/react';

import { ChevronDownIcon } from '@chakra-ui/icons'
import LogoutButton from '../Logout/Logout';



export const DropDownMenu = function () {
  return (<Menu>
    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
      Menu
    </MenuButton>
    <MenuList>
      <MenuItem><LogoutButton /></MenuItem>
      <MenuDivider/>
      <MenuItem>Create a Copy</MenuItem>
      <MenuItem>Mark as Draft</MenuItem>
      <MenuItem>Delete</MenuItem>
      <MenuItem>Attend a Workshop</MenuItem>
    </MenuList>
  </Menu>)
}