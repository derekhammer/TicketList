import React from "react";
import PropTypes from "prop-types";

function Ticket(props){
  var myStyledComponentStyles = {
      textAlign: 'center',
      fontSize: '50px',
      backgroundColor: 'lightblue',
      fontFamily: 'cursive',
      // paddingTop: '10px',
      color: 'red'
    }

  return (
        <div style={myStyledComponentStyles}>
        <h3>{props.location} - {props.names}</h3>
        <p><em>{props.issue}</em></p>
          <hr/>
        </div>
     );
  }

  Ticket.propTypes = {
    names: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    issue: PropTypes.string,
  };

  export default Ticket;