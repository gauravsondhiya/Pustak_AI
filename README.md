<img width="1741" height="917" alt="image" src="https://github.com/user-attachments/assets/c84b6982-a4bf-4fd5-8707-1ae9f5191fd8" />

# Pustak AI

Pustak AI is a **Retrieval-Augmented Generation (RAG)** application that allows users to interact with their documents using natural language. Instead of relying only on an LLM's pre-trained knowledge, Pustak AI retrieves relevant information from uploaded documents and uses that context to generate accurate, document-grounded responses.

## Features

* Upload and process documents
* Extract and chunk document content
* Generate embeddings for document chunks
* Store and retrieve vector embeddings
* Semantic search over uploaded documents
* Context-aware AI responses using RAG
* Ask questions about uploaded documents
* REST API based backend
* React-based frontend
* PostgreSQL database support
* JWT-based authentication
* Protected API routes

## How RAG Works

Pustak AI follows this general pipeline:

```text
                 ┌──────────────┐
                 │    User      │
                 └──────┬───────┘
                        │
                        ▼
                ┌───────────────┐
                │ Upload/Query  │
                └───────┬───────┘
                        │
            ┌───────────┴───────────┐
            │                       │
            ▼                       ▼
     Document Processing       User Question
            │                       │
            ▼                       ▼
       Text Chunking           Query Embedding
            │                       │
            ▼                       │
        Embeddings                 │
            │                       │
            ▼                       ▼
       Vector Store ───────► Similarity Search
                                    │
                                    ▼
                             Relevant Chunks
                                    │
                                    ▼
                              LLM + Context
                                    │
                                    ▼
                              Final Answer
```

## Tech Stack

### Frontend

* React.js
* JavaScript / TypeScript
* Axios
* React Hooks

### Backend

* Node.js
* Express.js
* REST APIs
* JWT Authentication
* Cookie-based authentication

### Database

* PostgreSQL
* Neon PostgreSQL
* `pg`

### AI / RAG

* Large Language Model (LLM)
* Embeddings
* Vector similarity search
* Retrieval-Augmented Generation
* LangChain / LangGraph where applicable

## Project Structure

```text
Pustak_AI/
│
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── context/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── Backend/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── models/
│   ├── services/
│   ├── utils/
│   ├── config/
│   ├── index.js
│   └── package.json
│
├── .env
├── .gitignore
└── README.md
```

## Authentication Flow

Pustak AI uses JWT-based authentication.

```text
User
 │
 ▼
Login
 │
 ▼
Backend validates credentials
 │
 ▼
JWT generated
 │
 ▼
JWT stored in HTTP-only Cookie
 │
 ▼
Client sends authenticated requests
 │
 ▼
Backend verifies JWT
 │
 ▼
Protected resource
```

Using HTTP-only cookies helps prevent client-side JavaScript from directly accessing the authentication token.

## RAG Pipeline

### 1. Document Upload

The user uploads a document through the frontend.

### 2. Text Extraction

The backend extracts readable text from the document.

### 3. Chunking

Large documents are divided into smaller chunks.

```text
Document
   ↓
Large Text
   ↓
Chunk 1
Chunk 2
Chunk 3
Chunk 4
...
```

Chunking allows the retrieval system to find only the relevant parts of a document.

### 4. Embedding Generation

Each chunk is converted into a numerical vector using an embedding model.

```text
"Machine learning is..."
        ↓
   Embedding Model
        ↓
[0.023, -0.41, 0.72, ...]
```

### 5. Vector Storage

The generated embeddings and their corresponding text are stored in the vector database.

### 6. User Query

The user asks a question:

```text
"What is mentioned about machine learning?"
```

The question is also converted into an embedding.

### 7. Similarity Search

The system searches for document chunks that are semantically similar to the question.

### 8. Context + LLM

The retrieved chunks are provided to the LLM as context.

```text
User Question
      +
Relevant Document Chunks
      ↓
     LLM
      ↓
Final Answer
```

This allows Pustak AI to generate answers based on the user's documents instead of relying entirely on the model's general knowledge.

## Environment Variables

Create a `.env` file in the backend:

```env
PORT=5000

DATABASE_URL=your_postgresql_connection_string

JWT_SECRET=your_jwt_secret

OPENAI_API_KEY=your_api_key
```

Do not commit `.env` files to GitHub.

## Installation

### Clone the Repository

```bash
git clone <your-repository-url>

cd Pustak_AI
```

### Backend

```bash
cd Backend

npm install

npm run dev
```

### Frontend

Open another terminal:

```bash
cd Frontend

npm install

npm run dev
```

The frontend and backend will run separately during development.

## API Example

### Login

```http
POST /api/auth/login
```

Request:

```json
{
  "email": "user@example.com",
  "password": "password"
}
```

Response:

```json
{
  "message": "Login successful",
  "user": {
    "id": 1,
    "email": "user@example.com"
  }
}
```

### Protected Request

```http
GET /api/user/profile
```

The browser automatically sends the authentication cookie when configured correctly.

## CORS Configuration

When the frontend and backend run on different origins, credentials must be configured correctly.

Example:

```javascript
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
```

Frontend:

```javascript
axios.get("http://localhost:5000/api/user/profile", {
  withCredentials: true,
});
```

## Future Improvements

* Multiple document support
* Chat history
* Streaming AI responses
* Citation-based answers
* PDF preview
* Conversation memory
* Document management
* Advanced vector search
* User-specific document isolation
* Production deployment
* Rate limiting
* Better document parsing
* RAG evaluation and monitoring

## Learning Goals

This project demonstrates practical implementation of:

* React
* Node.js
* Express.js
* PostgreSQL
* REST APIs
* Authentication
* JWT
* HTTP-only cookies
* CORS
* Embeddings
* Vector search
* RAG
* LLM integration
* Document processing
* AI application architecture

## License

This project is intended for learning and development purposes.
