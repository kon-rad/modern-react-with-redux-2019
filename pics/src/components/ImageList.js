import React from 'react';
require('./ImageList.css');

const ImageList = (props) => {
  const images = props.images.map(({ urls, description, id }) => {
    return <img alt={description} key={id} src={urls.regular} />
  })
  return (
    <div className={"image-list"}>{images}</div>
  )
};

export default ImageList;