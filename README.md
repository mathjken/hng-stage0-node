# 🧙‍♂️ HNG Backend Wizards — Stage 0 Task

## 🚀 Description
This is a simple REST API built with **Node.js and Express** that returns profile information and a dynamic cat fact from the [Cat Facts API](https://catfact.ninja/fact).

## 🧩 Endpoint
**GET** `/me`

### ✅ Example Response
```json
{
  "status": "success",
  "user": {
    "email": "ogujohnkennedy@gmail.com",
    "name": "Johnkennedy Uzoma Ogu",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-15T12:34:56.789Z",
  "fact": "Cats sleep 70% of their lives."
}
