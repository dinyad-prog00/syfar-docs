---
sidebar_position: 1
---

# request

The `request` action allows you to make HTTP requests.

## Inputs

### `url`
The URL to which the HTTP request is sent.
- **Type**: `string`
- **Required**: `true`

### `method`
The HTTP method to use (e.g., `GET`, `POST`).
- **Type**: `string`
- **Required**: `false`
- **Default**: `GET`

### `params`
The parameters to be included in the request URL.
- **Type**: `object`
- **Required**: `false`

### `query`
The query parameters to be appended to the URL.
- **Type**: `object`
- **Required**: `false`

### `body`
The body of the request (usually for `POST` or `PUT` requests).
- **Type**: `object`
- **Required**: `false`

### `headers`
The headers to include in the request.
- **Type**: `object`
- **Required**: `false`

## Outputs

### `status`
The status text of the HTTP response (e.g., "OK").
- **Type**: `string`

### `statusCode`
The HTTP status code of the response (e.g., `200`).
- **Type**: `int`

### `body`
The raw body content of the HTTP response.
- **Type**: `string`

### `json`
The parsed JSON response body (if applicable).
- **Type**: `object`
