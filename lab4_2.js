const express = require('express');
const axios = require('axios');
const json=require('json');
const app = express();

app.get('/', async (req, res) => {
  try {
    const response = await axios.get('http://www.mocky.io/v2/5c7db5e13100005a00375fda');
    responseData=response.data;
    const myJSON = JSON.parse(JSON.stringify(responseData).replace(/ /g,'_'));
    
    
    res.send(myJSON.result);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});