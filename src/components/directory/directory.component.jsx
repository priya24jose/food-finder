import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Hyderbad',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq-DMHi3YvqQ_CjbyJDW1aL8FVulvZa2B-pA&usqp=CAU',
          id: 1,
          linkUrl: 'hats'
        },
        {
          title: 'Banglore',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH9NOXmACooMRSKAkS0DhE4z6LYrmmWzhG6A&usqp=CAU',
          id: 2,
          linkUrl: ''
        },
        {
          title: 'Kochi',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Kochi_montage2.jpg/250px-Kochi_montage2.jpg',
          id: 3,
          linkUrl: ''
        }
       
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
