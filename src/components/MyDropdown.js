import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyDropdown() {
  return (
    <Dropdown className='d1 mx-3'>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Feedback
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default MyDropdown;
