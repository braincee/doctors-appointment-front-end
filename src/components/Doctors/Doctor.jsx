import React, { Component } from 'react'


class Doctor extends Component {
  render() {
    return (
      <div className='card card-body mb-3'>
        <ul className='list-group'>
            <li className='list-group-item'>Image: </li>
            <li className='list-group-item'>Name: </li>
            <li className='list-group-item'>Speciliality:</li>
        </ul>
      </div>
    )
  }
}


export default Doctor;