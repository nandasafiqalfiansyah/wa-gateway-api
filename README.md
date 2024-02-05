# WA-Web Gateway API

## Description

WA-Web Gateway API is an API that allows integration with WhatsApp services through the web. By using this API, you can integrate WhatsApp services into your web applications.

## Usage

### Initialization

```javascript
const waWebGateway = require("wa-web-gateway-api");
const api = new waWebGateway();
```

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

## License

Licensed under the [MIT License](LICENSE).
