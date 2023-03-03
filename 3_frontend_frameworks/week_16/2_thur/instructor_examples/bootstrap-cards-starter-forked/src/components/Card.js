import React from 'react'
import CardBody from './CardBody'
import CardImage from './CardImage'
//create the component
const Card1 = ({img, title, text, url}) => {
  // const {img, title, text, url} = props
  // const img = props.img
  // const title = props.title
  // const text = props.text
  // const url = props.url

  return (
    <div className="card" style={ {width: "18rem"} }>
    <CardImage img={img} asdf={title} />
    <CardBody 
      title={title} 
      text={text} 
      url={url} 
    />
  </div>
  );
};

//export the component 
export default Card1