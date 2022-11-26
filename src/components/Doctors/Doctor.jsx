import React, { Component } from 'react'


class Doctor extends Component {
  render() {

    const { name, fee, image, details} = this.props.contact;
    return (
      <div className='card card-body mb-3'>
        <ul className='list-group'>
            <li className='list-group-item'>Name: 
              {name} 
            </li>
            <li className='list-group-item'>
                Fee: {fee}
            </li>
            <li className='list-group-item'>
                Image: {image}
            </li>
            <li className='list-group-item'>
                Details: {details}
            </li>
        </ul>
      </div>
    )
  }
}


export default Doctor;