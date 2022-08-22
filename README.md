<h1>RPG_game Base<h1>
# descrição 

Essa aplicação simula um jogo de RPG(Role-Player Game), onde o usuário pode se cadastrar, criar um personagem com uma classe e matar monstros para adquirir itens e subir de level
 <h3> Rotas Para admin  <h3>
 >> /gameup/admin
 get: {
                "summary": "Lista de usuários",
                "description": "Endpoint responsável por listar todos os usuários cadastrados, com todos seus dados",
                "tags": ["Admin"],
                "security": [{ "bearerAuth": [] }],
                "responses": {
                    "200": {
                        "description": "OK",
                        "content": {
                            "application/json": {
                                "examples": {
                                    "user": {
                                        "value": [
                                            {
                                                "id": "be668ff9-51b9-43cf-9f59-948dc02fe310",
                                                "username": "jose",
                                                "email": "jose@mail.com",
                                                "phone": "99999999999",
                                                "age": 20,
                                                "address": "Avenida Nove de Julho, 999",
                                                "character": {
                                                    "name": "personagem",
                                                    "level": 1,
                                                    "xp": 0,
                                                    "xp_needed": 100,
                                                    "class": "mage",
                                                    "inventory": []
                                                }
                                            }
                                        ]
                                    }
                                }
                            }
                        }
                    }
                }
            
        }
