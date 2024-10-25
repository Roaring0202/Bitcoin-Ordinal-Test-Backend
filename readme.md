# Ordinals Stacking Mock API Service

This is a simple Express.js backend application that provides a RESTful Mock API to simulate ordinals stacking.

## Technologies Used

- Node.js
- Express.js
- CORS middleware

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 12 or higher recommended)
- npm (comes with Node.js)

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the server:**

   ```bash
   node start
   ```

   The server will start running on `http://localhost:3000`.

### API Endpoints

- **GET `/ordinals`**
  
  Retrieve the list of all stacked ordinals.

  **Response:**

  ```json
    {
        "success": true,
        "ordinals": [
            {
                "id": "f3be6fc7ba4a0cb6f01d1a8786561acc8afd2e0f20f74fc1903806a61012b1ffi0",
                "number": 75907459,
                "address": "bc1pc0se4vnckrqcwkyfaakawa7cyaqxrme9xe7zle4pkjr4004jqpfstvlk4x",
                "tx_id": "f3be6fc7ba4a0cb6f01d1a8786561acc8afd2e0f20f74fc1903806a61012b1ff",
                "value": "546",
                "sat_ordinal": "1430449526240",
                "sat_rarity": "common",
                "sat_coinbase_height": 286,
                "mime_type": "text/html",
                "content_type": "text/html;charset=utf-8",
                "content_length": 99,
                "timestamp": 1726717891000
            }
        ]
    }
  ```

- **POST `/stack`**
  
  Stack a new item.

  **Request Body:**

  ```json
    {
        "id": "f3be6fc7ba4a0cb6f01d1a8786561acc8afd2e0f20f74fc1903806a61012b1ffi0",
        "number": 75907459,
        "address": "bc1pc0se4vnckrqcwkyfaakawa7cyaqxrme9xe7zle4pkjr4004jqpfstvlk4x",
        "tx_id": "f3be6fc7ba4a0cb6f01d1a8786561acc8afd2e0f20f74fc1903806a61012b1ff",
        "value": "546",
        "sat_ordinal": "1430449526240",
        "sat_rarity": "common",
        "sat_coinbase_height": 286,
        "mime_type": "text/html",
        "content_type": "text/html;charset=utf-8",
        "content_length": 99,
        "timestamp": 1726717891000
    }
  ```

  **Response:**

  ```json
  {
      "success": true
  }
  ```

- **POST `/unstack`**
  
  Unstack a item.

  **Request Body:**

  ```json
    {
        "id": "f3be6fc7ba4a0cb6f01d1a8786561acc8afd2e0f20f74fc1903806a61012b1ffi0"
    }
  ```

  **Response:**

  ```json
  {
      "success": true
  }
  ```
