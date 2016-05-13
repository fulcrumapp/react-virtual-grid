import React from 'react';
import ResizeHandle from './resize-handle';

export default class ResizableCell extends React.Component {
  static propTypes = {
    onColumnResizeStart: React.PropTypes.func,
    onColumnResize: React.PropTypes.func,
    onColumnResizeEnd: React.PropTypes.func,
    onRowResizeStart: React.PropTypes.func,
    onRowResize: React.PropTypes.func,
    onRowResizeEnd: React.PropTypes.func,
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    rowIndex: React.PropTypes.number.isRequired,
    columnIndex: React.PropTypes.number.isRequired
  };

  renderColumnResizeHandle() {
    return (
      <ResizeHandle onResizeStart={this.handleColumnResizeStart}
                    onResize={this.handleColumnResize}
                    onResizeEnd={this.handleColumnResizeEnd} />
    );
  }

  renderRowResizeHandle() {
    return (
      <ResizeHandle onResizeStart={this.handleRowResizeStart}
                    onResize={this.handleRowResize}
                    onResizeEnd={this.handleRowResizeEnd}
                    dimension="height" />
    );
  }

  handleColumnResizeStart = (widthChange, heightChange) => {
    if (this.props.onColumnResizeStart) {
      this.props.onColumnResizeStart(this.props.columnIndex, this.props.width + widthChange);
    }
  }

  handleColumnResize = (widthChange, heightChange) => {
    if (this.props.onColumnResize) {
      this.props.onColumnResize(this.props.columnIndex, this.props.width + widthChange);
    }
  }

  handleColumnResizeEnd = () => {
    if (this.props.onColumnResizeEnd) {
      this.props.onColumnResizeEnd();
    }
  }

  handleRowResizeStart = (widthChange, heightChange) => {
    if (this.props.onRowResizeStart) {
      this.props.onRowResizeStart(this.props.rowIndex, this.props.height + heightChange);
    }
  }

  handleRowResize = (widthChange, heightChange) => {
    if (this.props.onRowResize) {
      this.props.onRowResize(this.props.rowIndex, this.props.height + heightChange);
    }
  }

  handleRowResizeEnd = () => {
    if (this.props.onRowResizeEnd) {
      this.props.onRowResizeEnd();
    }
  }
}