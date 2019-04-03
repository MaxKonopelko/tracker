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
    key: 'family',
    label: 'Family'
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
    key: 'status',
    label: 'Status'
  },
  {
    key: 'actions',
    label: 'Actions'
  }
];