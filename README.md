# exam-group-a-api

# Contributors
- Orillo, Bernard Jay : setup project
- Diamante, Christina : GET /exams endpoints
- Batuhan, Kenneth James : POST /exams endpoints
- Pilapil, Ed Jaymar : PUT /exams/:id endpoints



# API Documentation


GET /exams

Response
```
{
    "users": [
        {
            "id": 1,
            "name": "John Doe"
        },
        {
            "id": 2,
            "name": "Jane Doe"
        },
        {
            "id": 3,
            "name": "John Smith"
        }
    ]
}
```

POST /exams

Request
```
{
    "id": 2,
    "name": "Exam 2"
}
```

Response
```
{
    "message": "Exam created successfully",
    "exam": {
        "id": 2,
        "name": "Exam 2"
    }
}
```

PUT /exams/:id

Request
```
{
    "name": "Exam 2"
}
```

Response
```
{
    "message": "Exam updated successfully",
    "exam": {
        "id": 2,
        "name": "Exam 2"
    }
}
