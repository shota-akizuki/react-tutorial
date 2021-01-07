import React from "react";

class List extends React.Component {
  //propsはrenderメソッドの中に書く
  render() {
    const { title } = this.props;
    return (
      <div>
        <p>{title}</p>
        <div>リストです</div>
      </div>
    );
  }
}
export default List;
