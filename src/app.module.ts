import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './modules/projects/projects.module';
import { UsersModule } from './modules/users/users.module';
import { TasksModule } from './modules/tasks/tasks.module';
import { TypeOrmConfig } from './modules/config/typeorm/typeorm.module';
import { PaginationModule } from './modules/pagination/pagination.module';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [ProjectsModule, 
    UsersModule, 
    TasksModule, 
    TypeOrmConfig, 
    PaginationModule,
    CacheModule.register({
        isGlobal: true
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
