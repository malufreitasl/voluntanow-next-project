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

## GET /api/institutions/highlights
        body: empty
        response (200 ok): {
            "institutions": [
                {
                    "name"
                }
            ]
        }

## Erros responses:
    response (400 bad request): {
        "message": "bad request" 
    } 
