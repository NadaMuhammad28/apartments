import { MenuItem } from '@interfaces/menu';
import HomeIcon from '@mui/icons-material/Home';
export const menu: MenuItem[] = [
  {
    name: 'Apartments',
    icon: <HomeIcon />,
    child: [
      {
        name: 'All Apartments',
        url: '',
      },
      {
        name: 'Add Apartment',
        url: 'add-apartment',
      },
    ],
  },
];
