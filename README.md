## Installation

Install dependencies
```
npm install
```

## Deployment
Deploy all function
```
npm run deploy
```
    
After first deploy, it's much faster do deploy function by function.
```
npm run deploy:hello
npm run deploy:item
```
    

## Testing
Testing "hello" endpoint
```
npm run test:hello
npm run test:hello:local
```

Testing "item" endpoint locally using inline parameters and JSON file
```
npm run test:item:local
npm run test:item:local:json
```
   

## Testing with Curl
Use the `serverless info` command to display the URLs if they are no longer on your screen.

Testing "hello" endpoint using the GET method.
```
curl -X GET https://XXXXXXXXXX.execute-api.us-east-1.amazonaws.com/dev/hello
```

Testing "item" endpoint using the GET method and specifying an id path parameter of "123".
```
curl -X GET https://XXXXXXXXXX.execute-api.us-east-1.amazonaws.com/dev/item/123
```