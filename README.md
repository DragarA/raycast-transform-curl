# Clipboard Curl

A Raycast extension that transforms curl commands from your clipboard for local development.

## Description

Clipboard Curl takes a curl command from your clipboard and automatically:
- Changes the domain to `localhost:3000`
- Removes backslashes and line continuations
- Cleans up formatting and extra whitespace
- Copies the transformed command back to your clipboard

Perfect for quickly adapting API calls from production/staging environments to your local development server.

## Usage

1. Copy a curl command to your clipboard (from browser dev tools, API documentation, etc.)
2. Open Raycast and run "Transform Curl to Localhost"
3. The transformed curl command will be automatically copied back to your clipboard

### Example

**Before:**
```bash
curl 'https://api.example.com/v1/users' \
  -H 'Authorization: Bearer token123' \
  -H 'Content-Type: application/json' \
  -d '{"name":"John"}'
```

**After:**
```bash
curl http://localhost:3000 -H 'Authorization: Bearer token123' -H 'Content-Type: application/json' -d '{"name":"John"}'
```

## Installation

1. Clone this repository
2. Install dependencies: `npm install`
3. Run in development: `npm run dev`
4. Build for production: `npm run build`

## Requirements

- Raycast
- Node.js
- TypeScript

## License

MIT