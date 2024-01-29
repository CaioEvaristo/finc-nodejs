# finc-nodejs

## Routes

### GET /api/v1/health

Returns the health of the service.

#### Response

```json
{
    "status": "ok"
}
```

### GET /api/v1/register/:id

Returns the registration status of the given id.

#### Response

```json
{
    "id": "1234567890",
    "status": "registered"
}
```

### POST /api/v1/register

Registers a new user.

#### Request

```json
{
    "id": "1234567890",
    "name": "John Doe",
    "email": "email@mail.com",
    "password": "password"
}
```

#### Response

```json
{
    "id": "1234567890",
    "status": "registered"
}
```

### DELETE /api/v1/register/:id

Deletes the registration of the given id.

#### Response

```json
{
    "id": "1234567890",
    "status": "deleted"
}
```
### POST /api/v1/value

Register the new valeu and your type.

#### Request

```json
{
    "value": "12,50",
    "where": "Supermarket",
    "type": "outlay"
}
```

#### Response

```json
{
    "value": "12,50",
    "where": "Supermarket",
    "type": "outlay",
    "status": "registered"
}
```