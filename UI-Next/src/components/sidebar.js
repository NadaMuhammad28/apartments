'use client';

import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
  ListItemIcon,
  Toolbar,
  useMediaQuery,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home'; // Ensure you import this correctly
import Link from 'next/link'; // Use Next.js Link component
import theme from '@/services/theme';

const Sidebar = () => {
    const isSmScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const [isOpen, setIsOpen] = useState(!isSmScreen);
  const menu = [
    {
      name: 'Apartments',
      icon: <HomeIcon />,
      child: [
        {
          name: 'All Apartments',
          url: '/',
        },
        {
          name: 'Add Apartment',
          url: '/apartments/add',
        },
      ],
    },
  ];

  const [openMenus, setOpenMenus] = useState({});

  const handleMenuClick = (index) => {
    setOpenMenus((prevOpenMenus) => ({
      ...prevOpenMenus,
      [index]: !prevOpenMenus[index],
    }));
  };

  return (
    <Drawer
      anchor="left"
      variant={isSmScreen ? 'temporary' : 'permanent'}
      className="w-64"
      open={isOpen}
      classes={{
        paper: `w-64 border-0 !border-l-0`,
      }}
    >
      <Toolbar className="flex justify-between pr-0 pl-0"></Toolbar>
      <div className="flex-1 flex flex-col">
        <List>
          {menu.map((menuItem, index) => (
            <React.Fragment key={index}>
              <ListItem
                className="flex justify-center items-center gap-1"
                onClick={() => handleMenuClick(index)}
              >
                <ListItemIcon
                  color="primary"
                  classes={{ root: '!min-w-2' }}
                  className="min-w-2 text-primary"
                >
                  {menuItem.icon}
                </ListItemIcon>
                <ListItemText>
                  {menuItem.url ? (
                    <Link href={menuItem.url}>{menuItem.name}</Link>
                  ) : (
                    menuItem.name
                  )}
                </ListItemText>
                {menuItem.child &&
                  (openMenus[index] ? <ExpandLess /> : <ExpandMore />)}
              </ListItem>
              {menuItem.child && (
                <Collapse in={openMenus[index]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {menuItem.child.map((childItem, childIndex) => (
                      <ListItem sx={{ pl: 4, mt: -1 }} key={childIndex}>
                        <ListItemText>
                          <Link href={childItem.url}>{childItem.name}</Link>
                        </ListItemText>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              )}
            </React.Fragment>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

export default Sidebar;
