import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './Country.css';

const Country = ({ name, cases, flag }) => (
  <div className="country">
    <div className="img">
      <img src={flag} alt="flag" width="50" height="50" />
    </div>
    <div className="name_case">
      <h4 className="country-name">{name}</h4>
      <h6>{cases}</h6>
    </div>
    <div className="flex-end">
      <NavLink to={`/country/${name}`}>
        <button type="button" className="btn">See details</button>
      </NavLink>
    </div>
  </div>
);

Country.propTypes = {
  name: PropTypes.string.isRequired,
  cases: PropTypes.number.isRequired,
  flag: PropTypes.string.isRequired,
};

export default Country;
