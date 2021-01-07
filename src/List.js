import React from "react";

class List extends React.Component {
  //propsはrenderメソッドの中に書く
  render() {
    //langsは親から受け取る
    const { langs } = this.props;
    return (
      <div>
        {langs.map((lang, index) => {
          return <div key={index}>{lang}</div>;
        })}
      </div>
    );
  }
}
export default List;
