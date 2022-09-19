import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql'
import { AppService } from './app.service'
import { AppController } from './app.controller';
import { join } from 'path'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      buildSchemaOptions: { dateScalarMode: 'timestamp' },
      debug: false,
      playground: true,
      subscriptions: {
        'graphql-ws': true,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService], // Resolvers here
})
export class AppModule {}
