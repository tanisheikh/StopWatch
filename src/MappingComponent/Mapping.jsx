import React from 'react'
const Mapping = (props) => {
  const titleNames = {...props.titleNames}
  const optionsName = props.optionsName;
console.log("titleNamesMappingComponnet>>",titleNames)
  return (
    <> {titleNames?.mappedItem ? (
      <ul>
        <li>{`${titleNames} mapped  with ${titleNames?.mappedItem?.optionname} `}</li>
      </ul>
    ) : (
      ""
    )}
      </>
  )
}

export default Mapping