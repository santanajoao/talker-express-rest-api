# :warning: README em desenvolvimento :warning:

---

# Talker Manager API

API REST de gerenciamento de palestrantes desenvolvida com ExpressJS.

## Rotas

### GET /talker

Retorna todas as pessoas palestrantes cadastradas

- Status HTTP: 200 - OK

- <details>
    <summary>
      Exemplo de body:
    </summary>
  
    ```
    [
      {
        "name": "Henrique Albuquerque",
        "age": 62,
        "id": 1,
        "talk": { "watchedAt": "23/10/2020", "rate": 4 }
      },
      {
        "name": "Heloísa Albuquerque",
        "age": 67,
        "id": 2,
        "talk": { "watchedAt": "23/10/2020", "rate": 5 }
      },
      {
        "name": "Ricardo Xavier Filho",
        "age": 33,
        "id": 3,
        "talk": { "watchedAt": "23/10/2020", "rate": 4 }
      },
      {
        "name": "Marcos Costa",
        "age": 24,
        "id": 4,
        "talk": { "watchedAt": "23/10/2020", "rate": 5 }
      }
    ]
    ```
    
</details>

---

### GET /taker/:id

Retorna uma pessoa palestrante a partir do seu id

- Status HTTP: 200 - OK
- <details>
    <summary>Exemplo de body:</summary>
    
    ```
    {
      "name": "Henrique Albuquerque",
      "age": 62,
      "id": 1,
      "talk": { "watchedAt": "23/10/2020", "rate": 5 }
    }
    ```
    
  </details>
  
<br>
  
Caso não for encontrado um palestrante com o id, retorna uma mensagem de erro

- Status HTTP: 404 - NOT FOUND
- <details>
    <summary>Exemplo de body:</summary>
    
    ```
    {
      "message": "Pessoa palestrante não encontrada"
    }
    ```
    
  </details>
  
---

**GET** /talker/search

**GET** /talker/db

**POST** /login

**POST** /talker
 
**PUT** /talker/:id

**PATCH** /talker/rate/:id
 
**DELETE** /talker/:id
