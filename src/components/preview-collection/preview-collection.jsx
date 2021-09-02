import React from "react";
import CollectionItem from "../collection-item/collection-item";
import "./preview-collection.scss";

const PreviewCollection = ({ title, items }) => {
  return (
    <div className="preview-collection">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {" "}
        {items
          .filter((items, idx) => idx < 4)
          .map(({ id, ...OtherItemProps }) => (
            <CollectionItem key={id} {...OtherItemProps} />
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
