import React from 'react';

function ExampleTwoDeepComponent({ location }) {

  function queryStringTitle() {
    if (Object.keys(location.query).length === 0) {
      return 'No query string in the url';
    } else {
      return 'The query string field-value pairs are:';
    }
  }

  return (
    <div>
      <div>{queryStringTitle()}</div>
      <ul style={{marginTop: 0}}>
        {Object.keys(location.query).map((field, index) =>
          <li key={index}>
            {field}: {location.query[field]}
          </li>
        )}
      </ul>
    </div>
  )
}

export default ExampleTwoDeepComponent;
