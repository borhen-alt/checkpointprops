
import React from "react";
import PropTypes from "prop-types";

const Profile = (props) => {
  console.log(`props:`, props);
  return (
    <div>
      <h1>{props.fullName}</h1>
      <h3>{props.profession}</h3>
      <div>{props.children}</div>
      <p>
        <b>Bio:</b>
        <br />
        {props.bio}
      </p>
      <button
        onClick={() => props.handleName(`Profile User: ${props.fullName}`)}
      >
        Click Here
      </button>
    </div>
  );
};
// Set default props
Profile.defaultProps = {
  fullName: "First Name Last Name",
  bio:
    "In the middle of every difficulty lies an opprtunity",
  profession: "profession",
  children: "profile photo",
};

Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  children: PropTypes.any,
};

export default Profile;