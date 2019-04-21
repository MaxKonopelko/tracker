export interface ITableColumn
{
  key: string;
  label: string;
}

export const tableColumnsClients: ITableColumn[] = [
  {
    key: 'id',
    label: 'Id'
  },
  {
    key: 'name',
    label: 'Name'
  },
  {
    key: 'city',
    label: 'City'
  },
  {
    key: 'country',
    label: 'Country'
  },
  {
    key: 'projectsCount',
    label: 'Projects Count'
  }
];

export const tableColumnsProjects: ITableColumn[] = [
  {
    key: 'name',
    label: 'Name'
  },
  {
    key: 'description',
    label: 'Description'
  },
  {
    key: 'budget',
    label: 'Budget'
  },
  {
    key: 'client',
    label: 'Client'
  },
  {
    key: 'status',
    label: 'Status'
  },
  {
    key: 'actions',
    label: 'Actions'
  },
  {
    key: 'usersCount',
    label: 'Users'
  }
];

export const tableColumnsUsers: ITableColumn[] = [
  {
    key: 'name',
    label: 'Name'
  },
  {
    key: 'email',
    label: 'Email'
  },
  {
    key: 'age',
    label: 'Age'
  },
  {
    key: 'projectsCount',
    label: 'Projects Count'
  }
];

export const tableColumnsUsersProfile: ITableColumn[] = [
  {
    key: 'name',
    label: 'Name'
  },
  {
    key: 'email',
    label: 'Email'
  },
  {
    key: 'age',
    label: 'Age'
  }
];