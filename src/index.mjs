import {getBody, makeRequest} from './server.service.mjs';
import {createServer} from 'http';
const PORT = 3001;

// Create a simple node server instance and listen to the configured port
const server = createServer();
server.listen(PORT);

server.on('listening', () => {
    console.log(`Server started. Listening on port ${PORT}.`);
});

// Handle 'POST' requests and turn their payload into a request-URL to GET
server.on('request', async (request, response) => {
    try {
        switch (request.method) {
            case 'POST':
                let url = await getBody(request);
                let data = await makeRequest(url);
                response.write(data); // Writes the payload received from the user-set URL into the response
                response.statusCode = 200;
                break;

            default:
                response.statusCode = 403;
                break;
        }
        response.end();
    } catch (e) {
        console.error(`An error occured:\n${e}`);
        response.statusCode = 500;
        response.end();
    }
});
