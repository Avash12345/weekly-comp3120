const express = require('express');
const app = express();

app.get('/units', (req, res) => {
    return res.send({
        "units": [
          {
            "id": 0,
            "code": "COMP1010",
            "title": "Fundamentals of Computer Science",
            "offering": [
              "S1",
              "S2"
            ]
          },
          {
            "id": 1,
            "code": "COMP1750",
            "title": "Introduction to Business Information Systems",
            "offering": [
              "S1"
            ]
          },
          {
            "id": 2,
            "code": "COMP2110",
            "title": "Web Technology",
            "offering": [
              "S1",
              "S2"
            ]
          },
          {
            "id": 3,
            "code": "COMP2750",
            "title": "Applications Modelling and Development",
            "offering": [
              "S1"
            ]
          },
          {
            "id": 4,
            "code": "MMCC2045",
            "title": "Interactive Web Design",
            "offering": [
              "S2"
            ]
          },
          {
            "id": 5,
            "code": "COMP3120",
            "title": "Advanced Web Development",
            "offering": [
              "S2"
            ]
          },
          {
            "id": 6,
            "code": "COMP3130",
            "title": "Mobile Application Development",
            "offering": [
              "S1"
            ]
          },
          {
            "code": "Avash",
            "title": "Test",
            "offering": [
              "S1"
            ],
            "id": 7
          },
          {
            "code": "1",
            "title": "111",
            "offering": [
              "S1"
            ],
            "id": 8
          },
          {
            "code": "1",
            "title": "wed",
            "offering": [
              "S1"
            ],
            "id": 9
          }
        ]
      })
});

app.post('/units', (req, res) => {
    const data = req.body;
    res.send('Unit created', JSON.stringify(data));
});

app.listen(3001);
