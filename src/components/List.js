import React from "react";

class List extends React.Component {
  constructor(props) {
    super(props);

    this.renderListData = this.renderListData.bind(this);
  }

  renderListData() {
    return this.props.data.map((listitem, index) => {
      const { item } = listitem;
      return (
        <tr key={item}>
          <td className="list">{item}</td>
          <td><button className="list" id={item} onClick={this.props.onComplete}>
            Complete
          </button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <table id="list">
          <colgroup>
            <col className="firstcol" />
            <col className="secondcol"/>
          </colgroup>
          <tbody>{this.renderListData()}</tbody>
        </table>
      </div>
    );
  }
}

export default List;
