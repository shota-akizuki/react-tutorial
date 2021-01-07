import React from "react";

const LANGUAGES = ["JavaScript", "Dart", "TypeScript", "Swift", "Kotlin"];

class List extends React.Component {
  //propsはrenderメソッドの中に書く
  render() {
    return (
      <div>
        {LANGUAGES.map((lang, index) => {
          return <div key={index}>{lang}</div>;
        })}
      </div>
    );
  }
}
export default List;
