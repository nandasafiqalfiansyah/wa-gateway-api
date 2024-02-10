# WA-Web Gateway API

## Description

WA Web is a Node.js application that provides a web interface for WhatsApp Web using the WhatsApp Web API wrapper `whatsapp-web.js`.

> 🔔 INFO
>
> 'NodeJS v12 or higher is required'

## Installation

1. Clone this repository.

```javascript
git clone https://github.com/nandasafiqalfiansyah/wa-gateway-api.gits
```

2. Navigate to the project directory.

3. Run `npm install` to install the dependencies.

## Usage

- Run `npm start` to start the server in production mode.
- Run `npm run dev` to start the server in development mode using Nodemon.
- The application will be accessible at `http://localhost:5000` by default.
- You need to have a `.env` file in the root directory with the required environment variables. Example:

## Dependencies

- `express`: Web framework for Node.js.
- `whatsapp-web.js`: WhatsApp Web API wrapper.
- `body-parser`: Middleware to parse incoming request bodies.
- `cors`: Middleware for enabling Cross-Origin Resource Sharing (CORS).
- `dotenv`: Module to load environment variables from a `.env` file.
- `nodemon`: Development utility that automatically restarts the server when changes are detected.
- `qrcode-terminal`: Displays QR codes in the terminal.

### Send Message and response Messages

```javascript
const customMessages = [
  { command: "!hello", response: "Hi there!" },
  { command: "!weather", response: "The weather is sunny today." },
  { command: "!nanda", response: "hello" },
];
```

## Endpoint Table

<!-- comming soon guys ❤️ -->

| Endpoint        | HTTP Method | Description              |
| --------------- | ----------- | ------------------------ |
| `/send-message` | POST        | Send WhatsApp message    |
| `/get-contacts` | GET         | Get the list of contacts |
| `/status`       | GET         | Check service status     |

## Contribution

Feel free to contribute by opening a pull request or reporting issues on the [GitHub repository](https://github.com/nandasafiqalfiansyah).

## buymeacoffee

<a href="https://www.buymeacoffee.com/roniemartinez" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

## License

Licensed under the [MIT License](LICENSE).
