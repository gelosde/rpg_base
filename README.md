<h1>RPG_game Base<h1>
 ###descrição 

Essa aplicação simula um jogo de RPG(Role-Player Game), onde o usuário pode se cadastrar, criar um personagem com uma classe e matar monstros para adquirir itens e subir de level

<h3> Rotas Para admin  <h3>

> /gameup/admin:
 
>   get: 
  {
<p>               "summary": "Lista de usuários",
<p>               "description": "Endpoint responsável por listar todos os usuários cadastrados, com todos seus dados",
<p>               "tags": ["Admin"],
<p>               "security": [{ "bearerAuth": [] }],
<p>               "responses": {
<p>                   "200": {
<p>                       "description": "OK",
<p>                       "content": {
<p>                            "application/json": {
<p>                                "examples": {
<p>                                    "user": {
<p>                                        "value": [
<p>                                            {
<p>                                                "id": "be668ff9-51b9-43cf-9f59-948dc02fe310",
<p>                                                "username": "jose",
<p>                                                "email": "jose@mail.com",
<p>                                                "phone": "99999999999",
<p>                                                "age": 20,
<p>                                                "address": "Avenida Nove de Julho, 999",
<p>                                                "character": {
<p>                                                    "name": "personagem",
<p>                                                    "level": 1,
<p>                                                    "xp": 0,
<p>                                                    "xp_needed": 100,
<p>                                                    "class": "mage",
<p>                                                    "inventory": []
<p>                                               }
<p>                                           }
<p>                                        ]
<p>                                   }
<p>                                }
<p>                            }
<p>                        }
<p>                    }
<p>                }
<p>        }
