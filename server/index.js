require("dotenv").config();
const Hapi = require("@hapi/hapi");
const Inert = require("@hapi/inert");
const Vision = require("@hapi/vision");
const HapiSwagger = require("hapi-swagger");
const rp = require("request-promise");

(async () => {
  const server = await new Hapi.Server({
    host: "localhost",
    port: 8000,
    routes: {
      cors: true,
    },
  });

  const swaggerOptions = {
    info: {
      title: "Test API Documentation",
      version: "v1",
    },
  };

  server.route({
    method: "GET",
    path: "/directions",
    handler: async (request, h) => {
      const transportType = request.query["0"];
      // const { coordinates } = request.query[1];
      console.log("params", request.params);
      const token = process.env.MAPBOX_TOKEN;
      const url = `https://api.mapbox.com/directions/v5/mapbox/${transportType}/-84.518641,39.134270;-84.512023,39.102779?access_token=${token}`;
      try {
        const response = await rp(url);

        console.log("response", response);

        return response;
      } catch (error) {
        console.log("error ", error);
      }
    },
    options: {
      description: "Directions api",
      notes: "Console log it",
      tags: ["api"], // ADD THIS TAG
    },
  });

  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: swaggerOptions,
    },
  ]);

  try {
    await server.start();
    console.log("Server running at:", server.info.uri);
  } catch (err) {
    console.log(err);
  }
})();
