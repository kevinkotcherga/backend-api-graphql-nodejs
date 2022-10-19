import "reflect-metadata";
import datasource from './utils';
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { WildersResolver } from "./resolvers/Wilders";

const PORT = 5000;

async function bootstrap(): Promise<void> {
  // ... Building schema here
  const schema = await buildSchema({
  resolvers: [WildersResolver],
});

  // Create the GraphQL server
  const server = new ApolloServer({
    schema,
  });

  // Start the server
  const { url } = await server.listen(PORT);
  console.log(`Server is running, GraphQL Playground available at ${url}`);

  // database conection
  try {
		await datasource.initialize();
		console.log("I'm connected!");
	} catch (err) {
		console.log('Error, connection not possible');
		console.error(err);
	}
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
