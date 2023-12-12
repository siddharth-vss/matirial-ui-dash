import DashboardIcon from '@mui/icons-material/Dashboard';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import HandshakeIcon from '@mui/icons-material/Handshake';
import StyleIcon from '@mui/icons-material/Style';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import InventoryIcon from '@mui/icons-material/Inventory';

const _nav = [
  {
    component: "NavItem",
    name: 'Dashboard',
    to: '/',
    icon: <DashboardIcon />,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // },
  },
  {
    component: "NavGroup",
    name: 'Administator',
    to: '/administator',
    icon: <ManageAccountsIcon /> ,
    items: [
      {
        component: "NavItem",
        name: 'Manage Profile',
        to: '/administator/profile',
      },
      {
        component: "NavItem",
        name: 'Manage Admin Territory',
        to: '/administator/admin',
      },
      {
        component: "NavItem",
        name: 'Manage Contract Cycle',
        to: '/administator/contractcycle',
      },
      {
        component: "NavItem",
        name: 'Manage Contract Type',
        to: '/administator/contracttype',
      },
      {
        component: "NavItem",
        name: 'Manage Email/SMS Settings',
        to: '/administator/mail',
      },
      {
        component: "NavItem",
        name: 'Manage Expense Type',
        to: '/administator/expense',
      },
      {
        component: "NavItem",
        name: 'Manage PM Cycle',
        to: '/administator/pmcycle',
      },
      {
        component: "NavItem",
        name: 'Manage Product',
        to: '/administator/product',
      },
      {
        component: "NavItem",
        name: 'Manage Feedback',
        to: '/administator/feedback',
      },
      {
        component: "NavItem",
        name: 'Manage Ticket',
        to: '/administator/ticket',
      },
      {
        component: "NavItem",
        name: 'Manage Customer Type',
        to: '/administator/customertype',
      },
    ],
  },
  {
    component: "NavGroup",
    name: 'Manage Customers',
    to: '/customers',
    icon: <HandshakeIcon /> ,
    items: [
      {
        component: "NavItem",
        name: 'Manage Tickets',
        to: '/tickets',
      },
    ],
  },
  {
    component: "NavGroup",
    name: 'Manage Tickets',
    to: '/tickets',
    icon: <StyleIcon /> ,
    items: [
      {
        component: "NavItem",
        name: 'DRINKS',
        to: '/shop/drinks',
      },
    ],
  },
  {
    component: "NavGroup",
    name: 'Manage Contracts',
    to: '/contracts',
    icon: <AssignmentTurnedInIcon /> ,
    items: [
      {
        component: "NavItem",
        name: 'DRINKS',
        to: '/shop',
      },
    ],
  },
  {
    component: "NavGroup",
    name: 'Manage Expenses',
    to: '/expenses',
    icon: <InventoryIcon /> ,
    items: [
      {
        component: "NavItem",
        name: 'DRINKS',
        to: '/shop/drink',
      },
    ],
  },
]

export default _nav