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
    key: 'address',
    label: 'Address'
  },
  {
    key: 'city',
    label: 'City'
  },
  {
    key: 'country',
    label: 'Country'
  }
];