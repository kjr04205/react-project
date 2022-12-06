import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/any',
    'name': '안효인',
    'birthday': '971105',
    'gender': '남자',
    'job': '개발자',
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '안효순',
    'birthday': '931105',
    'gender': '남자',
    'job': '프로그래머',
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '안킹인',
    'birthday': '971205',
    'gender': '남자',
    'job': '교사',
  }
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          })
        }
        {/* <Customer
          id={customers[0].id}
          image={customers[0].image}
          name={customers[0].name}
          birthday={customers[0].birthday}
          gender={customers[0].gender}
          job={customers[0].job}
        />
        <Customer
          id={customers[1].id}
          image={customers[1].image}
          name={customers[1].name}
          birthday={customers[1].birthday}
          gender={customers[1].gender}
          job={customers[1].job}
        />
        <Customer
          id={customers[2].id}
          image={customers[2].image}
          name={customers[2].name}
          birthday={customers[2].birthday}
          gender={customers[2].gender}
          job={customers[2].job}
        /> */}
      </div>

    );
  }
}

export default App;
