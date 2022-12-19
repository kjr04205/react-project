import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';
import { Table, TableHead, TableBody, TableRow, TableCell, withStyles, Paper } from '@material-ui/core';


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflow: 'auto',
  },
  table: {
    minWidth: 1080
  }
})
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
    'gender': '여자',
    'job': '프로그래머',
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '안킹인',
    'birthday': '971205',
    'gender': '남자',
    'job': '교사',
  },
  {
    'id': 4,
    'image': 'https://placeimg.com/64/64/5',
    'name': '양라희',
    'birthday': '970331',
    'gender': '여자',
    'job': '보건관리자',
  }
]

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
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
          </TableBody>
        </Table>
      </Paper>

    );
  }
}

export default withStyles(styles)(App);
