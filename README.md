<h1 align="center" >RPG_game Base<h1>

## Descrição:

Essa aplicação simula um jogo de RPG(Role-Player Game), onde o usuário pode se cadastrar, criar um personagem com uma classe e matar monstros para adquirir itens e subir de level

<h3 align="center"> Rotas Para admin  <h3>

## **/gameup/admin:**

## GET:

### Descrição

<p>** endpoint responsável por listar todos os usuários cadastrados, com todos seus dados status code esperado: status code  200_ok. **
<p>              
<p>                                    "users":
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
<p>

## **/gameup/admin/{email}**

#### GET:

Lista um usuário pelo email ndpoint responsável por listar somente um usuário, com todos seus dados",

<p>                  [
<p>                     {
<p>                         "name": "email",
<p>                         "in": "path",
<p>                         "Descrição Resposta": "Email para a busca do usuário",
<p>                         "required": true
<p>                     }
<p>                 ],
<p>                 "Resposta": {
<p>                     "404 NOT FOUND",
<p>                         "content": {
<p>                             "application/json": {
<p>                                 "examples": {
<p>                                     "user": {
<p>                                         "value": {
<p>                                             "message":"User not found"
<p>                                         }
<p>                                     }
<p>                                 }
<p>                             }
<p>                         }
<p>                     }
<p>                 "Resposta":
<p>                       status code 200: {
<p>                        "Descrição Resposta": "OK",
<p>                         "content": {
<p>                             "application/json": {
<p>                                 "examples": {
<p>                                    "user": {
<p>                                         "value": {
<p>                                            "id": "be668ff9-51b9-43cf-9f59-948dc02fe310",
<p>                                             "username": "jose",
<p>                                             "email": "jose@mail.com",
<p>                                             "phone": "99999999999",
<p>                                             "age": 20,
<p>                                             "address": "Avenida Nove de Julho, 999",
<p>                                             "character": {
<p>                                                 "name": "personagem",
<p>                                                 "level": 1,
<p>                                                 "xp": 0,
<p>                                                 "xp_needed": 100,
<p>                                                 "class": "mage",
<p>                                                 "inventory": []
<p>                                             }
<p>                                         }
<p>                                     }
<p>                                 }
<p>                             }
<p>                         }
<p>                     }
<p>

#### Rota delete:

Endpoint responsável por deletar um usuário.

 <p> "Respostas": {
 <p>                   "404": {
 <p>                       "Descrição Resposta":"NOT FOUND",
 <p>                       "content": {
 <p>                           "application/json": {
 <p>                               "examples": {
 <p>                                   "user": {
 <p>                                       "value": {
 <p>                                           "message":"User not found"
 <p>                                       }
 <p>                                  }
 <p>                           }
 <p>                          }
 <p>                        }
 <p>                   },
 <p>                   "204": {
 <p>                       "Descrição Resposta": "NO CONTENT"
 <p>                   }
 <p>              }
 <p>           }       
 <p>       }
 
 
##        **"/gameup/admin/items":** {
###           Rota POST :
Endpoint responsável por criar um item.
                            
<p>                     {
<p>                                        "name": "spike-sword",                 
<p>                                        "type": "common",
<p>                                        "size": 10,
<p>                                        "weight": 10,
<p>                                        "damage": 30,
<p>                                        "defense": 10,
<p>                                        "durability": 1000,
<p>                                        "effect": "attack",
<p>                                        "quantity": 10000
<p>                        }

<p>                "Respostas": {
<p>                    "400": {
<p>                        "Descrição Resposta": "BAD REQUEST",
<p>                 "value": {
<p>                                            "message": "Item 'spike-sword' is already registered"
<p>                                        }
<p>                                    }
<p>                                },
<p>    
<p>                    "201": {
<p>                        "Descrição Resposta": "CREATED",
<p>                     "value": {
<p>                                            "id": "b553e516-85a7-4c53-a554-f3562b86f23c",
<p>                                            "name": "spike-sword",               
<p>                                            "type": "common",
<p>                                           "size": 10,
<p>                                            "weight": 10,
<p>                                            "damage": 30,
<p>                                            "defense": 10,
<p>                                            "durability": 1000,
<p>                                            "effect": "attack",
<p>                                            "quantity": 10000
<p>                                        }
<p>                                    }
<p>

## /gameup/admin/skills

### Rota Post:

Endpoint responsável por criar uma skils.

 <p>                                   "value": {
 <p>                                       "name": "fire bomb",
 <p>                                       "level_required": 1,
 <p>                                       "type": "common",
 <p>                                       "damage": 10,
 <p>                                       "cost_skill": 1,
 <p>                                       "type_target": "magic",
 <p>                                       "cost_type": "mana",
 <p>                                       "element_target": "fire",
 <p>                                       "power_rank": 1
 <p>                                   }
<p>                   
<p>              },
<p>              "Resposta": {
<p>                  "400": {
<p>                     "Descrição Resposta": "BAD REQUEST",
<p>
<p>                                        "skills": {
<p>                                        "value": {
<p>                                          "message": "Skill 'fire bomb' is already registered"
<p>                                      }
<p>                                }
<p>                          }
<p>                },
<p>             "201": {
<p>                "Descrição Resposta": "CREATED",                       
<p>                                  "skills": {
<p>                                    "value": {
<p>                                       "id": "7844d4bd-e3db-4962-a22a-f577f70095f8",
<p>                                       "name": "fire bomb",
<p>                                      "level_required": 1,
<p>                                           "type": "common",
<p>                                          "damage": 10,
<p>                                          "cost_skill": 1,
<p>                                          "type_target": "magic",
<p>                                          "cost_type": "mana",
<p>                                          "element_target": "fire",
<p>                                          "power_rank": 1
<p>                                     }
<p>                                 }
<p>      },

## /gameup/admin/classes

### Rota Post:

Endpoint responsável por criar classes

<p>                                   "value": {
<p>                                        "name": "mage",
<p>                                        "status": {
<p>                                            "strength": 10,
<p>                                            "intelligency": 10,
<p>                                            "hp": 50,
<p>                                            "stamina": 100,
<p>                                            "mana": 100,
<p>                                            "speed": 10
<p>                                        },
<p>                                        "skills_name": ["fire bomb"]
<p>                                    }
                    
<p>                "Resposta": {
<p>                   "400": {
<p>                        "Descrição Resposta": "BAD REQUEST",
<p>                        "value": {
<p>                                            "message": "Class 'mage' is already registered"
<p>                                        }
<p>                                    }
<p>                               },
<p>                    "201": {
<p>                        "Descrição Resposta": "CREATED",
<p>                                       "value": {
<p>                                            "id": "556d2f54-b0fd-444c-b1a6-4125020e6bd3",
<p>                                            "name": "mage",
<p>                                            "status": {
<p>                                                "strength": 1,
<p>                                                "intelligency": 1,
<p>                                                "hp": 1,
<p>                                                "stamina": 1,
<p>                                                "mana": 1,
<p>                                                "speed": 1,
<p>                                                "id": "4f457e74-6e1f-41e6-972d-928aedb7ce17"
<p>                                            },
<p>                                            "skills": [
<p>                                                {
<p>                                                    "id": "c1e37b9d-4e72-47af-a68f-030c5034a194",
<p>                                                    "name": "fire",
<p>                                                    "level_required": 1,
<p>                                                    "type": "common",
<p>                                                    "damage": 10,
<p>                                                    "special_effect": "none",
<p>                                                    "cost_skill": 1,
<p>                                                    "type_target": "mana",
<p>                                                    "cost_type": "aa",
<p>                                                    "element_target": "lux",
<p>                                                    "power_rank": 1
<p>                                                }
<p>                                            ]
<p>                                        }
<p>                           }

## /gameup/admin/monsters

### Rota POST

Endpoint responsável por criar um monstro

<p>                               "monsters": {
<p>                                    "value": {
<p>                                        "name": "ogro",
<p>                                        "hp": 100,
<p>                                        "mana": "100",
<p>                                        "stamina": 10,
<p>                                        "damage": "10",
<p>                                        "xp_drop": 100,
<p>                                        "nivel": 1,
<p>                                        "quantity_drop": 1 
<p>                                    }
<p>                                }
<p>                            }
<p>                        }
<p>                   }
<p>                },
<p>                "Resposta": {
<p>                    "400": {
<p>                        "Descrição Resposta": "BAD REQUEST",
<p>                     
<p>                            "application/json": {
<p>                                "examples": {
<p>                                    "monsters": {
<p>                                        "value": {
<p>                                            "message": "Monster 'ogro' is already registered"
<p>                                        }
<p>                                    }
<p>                                }
<p>                            }
<p>                        }
<p>                    
<p>                },
<p>                    "201": {
<p>                        "Descrição Resposta": "CREATED",
<p>                        "monsters": {
<p>                                        "value": {
<p>                                            "id": "f2defdb0-1b10-46e8-91a1-0109b85ef8d6",
<p>                                            "name": "ogro",
<p>                                            "hp": 100,
<p>                                            "mana": "100",
<p>                                            "stamina": 10,
<p>                                            "damage": "10",
<p>                                            "xp_drop": 100,
<p>                                            "nivel": 1,
<p>                                            "quantity_drop": 1
<p>                                        }
<p>                                    }
<p>                    }
<p>                }
<p>            }  
<p>        },

## /gameup/user/register

### Rota POST:

<p>  Endpoint responsável para a criação de um novo usuário
<p>                                 "value": {
<p>                                        "username": "jose",
<p>                                        "password": "senhaForte",
<p>                                        "email": "jose@mail.com",
<p>                                        "phone": "99999999999",
<p>                                        "age": 20,
<p>                                        "address": "Avenida Nove de Julho, 999"
<p>                                    },
<p>                "Resposta": {
<p>                    "400": {
<p>                        "Descrição Resposta": "BAD REQUEST",
<p>                                    "register": {
<p>                                        "value": {
<p>                                            "message": "jose@mail.com is already registered"
<p>                                        }
<p>                                    }
<p>                                }
<p>                    },
<p>                    "201": {
<p>                        "Descrição Resposta": "CREATED",
<p>                                        "value": {
<p>                                            "id": "be668ff9-51b9-43cf-9f59-948dc02fe310",
<p>                                            "username": "jose",
<p>                                            "email": "jose@mail.com",
<p>                                            "phone": "99999999999",
<p>                                            "age": 20,
<p>                                            "address": "Avenida Nove de Julho, 999"
<p>                                        }
<p>                                      },

## /gameup/user/login

### Rota POST

<p>Endpoint responsável para realizar login do usuário cadastrado
<p>                                    "value": {               
<p>                                        "email": "jose@mail.com",
<p>                                        "password": "senhaForte"
<p>                                       },
<p>                "Resposta": {
<p>                    "404": {
<p>                        "Descrição Resposta": "NOT FOUND",
<p>                        "content": {
<p>                            "application/json": {
<p>                                "examples": {
<p>                                    "login": {
<p>                                        "value": {
<p>                                            "message": "User not found"
<p>                                        }
<p>                                  }
<p>                              }
<p>                          }
<p>                      }
<p>                   },
<p>                    "401": {
<p>                        "Descrição Resposta": "UNAUTHORIZED",
<p>                        "content": {
<p>                                        "value": {
<p>                                            "message": "Wrong email or password. Try again!"
<p>                                        }
<p>                                    },
<p>                    "200": {
<p>                        "Descrição Resposta": "OK",
<p>                                        "value": {
<p>                                            "token": <p>"4b72c6f34b72c6f3-6d0a-6a1-86c6-687d52de4fc7-6d0a-6a1-86c6-687d2c6f3-6d0a-6a1-86c6-687d52de4fc74b72c6f3-6d0a-6a1-86c6-687d52de4f<p>c7"
<p>                                        }
<p>                               },

## /gameup/user

### Rota PATCH

Endpoint responsável para editar um ou mais dados do usuário

<p>                                    "value": {               
<p>                                        "username": "maria"
<p>
<p>                },
<p>                "Resposta": {
<p>                    "400": {
<p>                        "Descrição Resposta": "BAD REQUEST",
<p>                                    "user": {
<p>                                        "value": {
<p>                                            "message": "Email already exists"
<p>                                        }
<p>                                    }
<p>                                }
<p>                    },
<p>                    "200": {
<p>                        "Descrição Resposta": "OK",
<p>                                    "user": {
<p>                                        "value": {
<p>                                            "id": "be668ff9-51b9-43cf-9f59-948dc02fe310",
<p>                                            "username": "maria",
<p>                                            "email": "jose@mail.com",
<p>                                            "phone": "99999999999",
<p>                                            "age": 20,
<p>                                            "address": "Avenida Nove de Julho, 999"
<p>                                        }
<p>                                    }
<p>                                },

## /gameup/classes

### Rota GET

    Endpoint responsável por listar todas as possíveis classes que um personagem pode escolher.

<p>                                            {
<p>                                              "id": "9d5bc695-def6-49f8-bf8f-c78ba1f0d77e",
<p>                                              "name": "mage",
 <p>                                             "status": {
  <p>                                              "id": "91344002-7583-4255-9991-888bee8458e6",
  <p>                                              "strength": 1,
  <p>                                              "intelligency": 1,
   <p>                                             "hp": 1,
   <p>                                             "stamina": 1,
   <p>                                             "mana": 1,
   <p>                                             "speed": 1
   <p>                                           },
   <p>                                           "skills": [
   <p>                                             {
    <p>                                              "id": "1dec10b5-3b47-4029-b127-c3285d67ca97",
    <p>                                              "name": "fire bomb",
    <p>                                              "level_required": 1,
    <p>                                              "type": "common",
    <p>                                              "damage": 10,
    <p>                                              "special_effect": null,
    <p>                                              "cost_skill": 1,
    <p>                                              "type_target": "mana",
    <p>                                              "cost_type": "aa",
    <p>                                              "element_target": "fire",
    <p>                                              "power_rank": 1
    <p>                                            }
    <p>                                          ]
    <p>                                       },

## /gameup/character

### Rota POST

Endpoint responsável pela criação de um novo personagem.
<p> "value": {
<p> "name": "Personagem",
<p> "class_name": "Mage"
<p> },
<p> "Resposta": {
<p> "409": {
<p> "Descrição Resposta": "CONFLICT",
<p> "value": {
<p> "message": "Character name already exists"
<p> }
<p> },
<p> "400": {
<p> "Descrição Resposta": "BAD REQUEST",
<p> "value": {
<p> "message": "You already have a registered character"
<p> }
<p> },
<p> "404": {
<p> "Descrição Resposta": "NOT FOUND",
<p> "value": {
<p> "message": "Class name 'Mage' not exists"
<p> },
<p> "201": {
<p> "Descrição Resposta": "CREATED",
<p> "value": {
<p> "name": "personagem",
<p> "level": 1,
<p> "xp": 0,
<p> "xp_needed": 100,
<p> "class": "mage",
<p> "inventory": []
<p> }
<p> }

## /gameup/character?name=personagem

### Rota GET:

Endpoint responsável pela busca de personagem pelo nome.

<p>                "Resposta": {
<p>                   "400": {
<p>                        "Descrição Resposta": "BAD REQUEST",
<p>                        "content": {
<p>                            "application/json": {
<p>                                "examples": {
<p>                                    "character": {
<p>                                        "value": {
<p>                                            "message": "Please specify character name."
<p>                                        }
<p>                                    }
<p>                                }
<p>                            }
<p>                       },
<p>                    "404": {
<p>                        "Descrição Resposta": "NOT FOUND",
<p>                                        "value": {
<p>                                            "message": "Please specify character name."
<p>                                        }
<p>                    },
<p>                    "200": {
<p>                       "Descrição Resposta": "OK",
<p>                                        "value": {
<p>                                            "name": "personagem",
<p>                                            "class": "mage",
<p>                                            "level": 1
<p>                                        }
<p>        },

## /gameup/monster

### Rota GET

Endpoint responsável por listar todos os monstros

<p>                "Resposta": {
<p>                    "200": {
<p>                        "Descrição Resposta": "OK",
<p>                                            {
<p>                                                "monstername":{
<p>                                                    "name": "ogro",
<p>                                                    "lvl": 1
<p>                                               }
<p>                                           }
<p>    },

## /gameup/monster?monster=Ogro

### Rota GET

Endpoint responsável por buscar um monstro pelo nome.

<p>                    {
<p>                        "name": "monster",
<p>                        "in": "query",
<p>                        "Descrição Resposta": "Nome do monstro",
<p>                        "required": true
<p>                    }
<p>                "Resposta": {
<p>                    "404": {
<p>                        "Descrição Resposta":"NOT FOUND",
<p>                                        "value": {
<p>                                            "message":"Monster not found"
<p>                                        }
<p>                        }
<p>                    },
<p>                    "200": {
<p>                       "Descrição Resposta": "OK",
<p>                                        "value": {
<p>                                            "monstername":{
<p>                                                "name": "ogro",
<p>                                                "lvl": 1
<p>                                            }
<p>                                }
<p>                            }
