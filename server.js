const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 7250;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/hello', (req, res) => {
    res.send({message: 'Hello ! '});
});

app.get('/api/customers', (req, res) => {
    res.send([
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
      ]);
})

app.listen(port, () => console.log(`listen port ${port}`));