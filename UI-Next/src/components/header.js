'use client';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
export default function Header({
  setIsOpen,
  isOpen,
}) {
  return (
    <AppBar
      sx={{
        zIndex: '9999',
      }}
      position="fixed"
    >
      <Toolbar
        classes={{
          root: 'bg-white',
        }}
        className="flex justify-between items-center"
      >
        <div className="flex gap-6 ">
          {/* SIDE BAR BTN */}
          <div className="w-56 flex justify-between">
            <IconButton onClick={() => setIsOpen(!isOpen)}>
              <MenuIcon color="primary" />
            </IconButton>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}
