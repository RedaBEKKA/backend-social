import { Module } from '@nestjs/common';

import { CommentsModule } from './comments/comments.module';
import { CommentsController } from './comments/comments.controller';
import { CommentsService } from './comments/comments.service';

@Module({
  imports: [CommentsModule],
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class AppModule {}
