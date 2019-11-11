import React, { useState, useEffect } from 'react';

function FlightInfo(props) {
  const { identifier } = props;
  const [ user, setUser ] = useState(null);

  async function fetchUserData(id) {
    // const response = await fetch("/" + id);
    const response = await fetch("https://www.s1s1s1.com/works/detail/ssni643/", {
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'text/html; charset=UTF-8'
      }
    });
    const content = await response.text();
    console.log(content);
    setUser(content);
  }

  useEffect(() => {
    // fetchUserData(identifier);
    fetch("https://www.s1s1s1.com/works/detail/ssni643/").then(function (response) {
          return response.text();
      }).then(function (json) {
          console.log(json);
      });
  }, [identifier]);

  if (!user) {
    return "loading...";
  }

  return (
    <details>
      <summary>Hi: {user}</summary>
    </details>
  );
}
