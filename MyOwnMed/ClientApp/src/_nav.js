export default {
  items: [
    {
      title: true,
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
    },
    {
      name: 'Demographics',
      url: '/demographics',
      icon: 'icon-star',
    },
    {
      name: 'Conditions',
      url: '/conditions',
      icon: 'icon-star',
    },
    {
      name: 'Labs',
      url: '/labs',
      icon: 'icon-star',
    },
    {
      name: 'Medications',
      url: '/medications',
      icon: 'icon-star',
    },
    {
      name: 'Network Dashboard',
      url: '/network-dashboard',
      icon: 'icon-star',
    },
    {
      name: 'Create Cohort',
      url: '/create-cohort',
      icon: 'icon-star',
    },
    {
      name: 'Manage',
      url: '/hcos',
      icon: 'icon-star',
      children: [
        {
          name: 'Report',
          url: '/manage/report',
          icon: 'icon-puzzle',
        },
        {
          name: 'Create Team',
          url: '/manage/create-team',
          icon: 'icon-puzzle',
        }]
    },
    {
      divider: true,
    }
  ],
};
