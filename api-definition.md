# Application
## POST /api/application
        request:
            body: { 
                "institution_id": "",
	            "volunteer_id": "",
	            "project_id": ""
             }
        response (200 ok): 
            body: 
            {
	            "message": "Successfully created application"
            }

## GET /api/application
        request:
            body: { }
        response (200 ok): 
            body: 
            {
                "application": [
                    {
                        "name": "application 1"
                    },
                    {
                        "name": "application 2"
                    }
                ]
            }

## GET api/application/hightlights
        request:
            body: { }
        response (200 ok): 
            body: 
            {
                "_id": "",
                "count": 0,
                "project": [
                    {
                        "_id": "",
                        "institution_id": "",
                        "name": "",
                        "description": "",
                        "hour": "",
                        "date": "",
                        "min_duration": 0,
                        "address": "",
                        "rating": 0
                    }
		        ],
                ,
                "institution": [
                    {
                        "_id": "",
                        "username": "",
                        "password": "",
                        "name": "Acolhimento a Idosos Porto",
                        "description": "",
                        "website_link": "",
                        "email": "",
                        "phone": ",
                        "local": ""
                    }
                ]
            }

# Institution
## GET /api/institution
        request:
            body: { }
        response (200 ok): 
            body: 
            {
                "institutions": [
                    {
                        "name": "Instituicao 1"
                    },
                    {
                        "name": "Instituicao 2"
                    }
                ]
            }

## GET /api/institution/highlights
        body: empty
        response (200 ok): {
            "institutions": [
                {
                    "name"
                }
            ]
        }

# Project
## GET /api/project
        request:
            body: { }
        response (200 ok): 
            body: 
            {
                "project": [
                    {
                        "name": "project 1"
                    },
                    {
                        "name": "project 2"
                    }
                ]
            }


# Erros responses:
    response (400 bad request): {
        "message": "bad request" 
    } 
