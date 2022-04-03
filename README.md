# Node-SSRF-Example (Server Side Request Forgery)
Showcases the dangers of requesting URLs from user input without any filter-methods.
This example doesn't use any external npm-packages and is built with nodes internal http-interface. This ssrf-example is extremely simplified.

## How To Run
Start the local node-server with <code>npm run start</code>. You can now send PUT-requests to <code>localhost:3001</code> with a text-payload containing an URL.

### Using CURL
<code>curl localhost:3001 --data URL</code>

## What Is Going To Happen?
The node-server receives the user-defined URL and starts its own GET-request towards the user-defined address and returns the response to the user.
Because the request is server-sided, the user can see information not meant for public view e.g requesting internal network-resources or files.
