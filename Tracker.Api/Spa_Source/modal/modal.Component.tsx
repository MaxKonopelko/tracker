import { default as React, ReactNode } from 'react';
import * as ReactDOM from 'react-dom';

interface IProps
{
  isShow?: boolean;
  handleSubmit: Function;
  onModal: Function;
}

interface IState
{
  isShow: boolean;
}

export class ModalComponent extends React.Component<IProps, IState>
{
  constructor(props: IProps)
  {
    super(props);

    const bool = this.props.isShow === undefined ? true : this.props.isShow;

    this.state = {
      isShow: bool,
    };
  }

  public onClickSave = () =>
  {
    this.props.handleSubmit();
  };

  public onClose = () =>
  {
    this.setState({
      isShow: false,
    });
    this.props.onModal();
  };

  public model = () =>
  {
    return (
      <>
        <div className="simplebox-overlay"/>
        <div className="modal modal-mid" id="cancel-delivery">
          <strong className="modal-caption">Add client
            <span className="close" onClick={this.onClose}>close</span>
          </strong>

          {this.props.children}
          <div className="modal-foot">
            <button type="button" className="btn btn-gray btn-close" onClick={this.onClose}>Close</button>
            <button type="button" className="btn" onClick={this.onClickSave}>Save</button>
          </div>
        </div>
      </>
    );
  };

  public render(): ReactNode
  {
    if (this.state.isShow)
    {
      return ReactDOM.createPortal(this.model(), document.querySelector('#modal'));
    }
    else
    {
      return null;
    }
  }
}
