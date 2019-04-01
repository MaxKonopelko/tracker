import { default as React, ReactNode } from 'react';
import { ITableColumn } from '../../models/table-maps';
import { EntityBase } from '../../models/models';

interface IProps<TEntityRow extends EntityBase>
{
  columns: ITableColumn[];
  rows: TEntityRow[];
}

export class TableComponent<TEntityRow extends EntityBase> extends React.Component<IProps<TEntityRow>>
{
  constructor(props: IProps<TEntityRow>)
  {
    super(props);
  }

  public getRow(row: TEntityRow): ReactNode
  {
    return (
      <tr key={row.id}>
        {
          this.props.columns.map(column =>
            {
              if (!(column.key in row))
              {
                console.error('Not found column key:', column.key);
              }
              return <td key={column.key + row.id}>{row[column.key]}</td>;
            }
          )
        }
      </tr>
    );
  }

  public render(): ReactNode
  {
    return (
      <div className="container-white">
        <table>
          <tbody>
          <tr>
            {
              this.props.columns.map(column =>
                <th key={column.key}>{column.label}</th>
              )
            }
          </tr>
          {
            this.props.rows.map(row =>
              this.getRow(row)
            )
          }
          </tbody>
        </table>
      </div>
    );
  }
}