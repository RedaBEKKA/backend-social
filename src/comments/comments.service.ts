import { Injectable, NotFoundException } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { v4 as uuid } from 'uuid';
import { Comment } from './entities/comment.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto, RateSuggestionDto } from './dto/update-comment.dto';

@Injectable()
export class CommentsService {
  private comments: Comment[] = [];

  constructor() {
    this.loadData();
  }

  private resolveDataPath() {
    const candidates = [
      path.join(__dirname, '../data/Mock_Comments_With_Posts.json'),
      path.join(process.cwd(), 'dist/data/Mock_Comments_With_Posts.json'),
      path.join(process.cwd(), 'src/data/Mock_Comments_With_Posts.json'),
    ];
    for (const p of candidates) {
      if (fs.existsSync(p)) return p;
    }
    throw new Error(
      'Mock_Comments_With_Posts.json not found in dist/data or src/data',
    );
  }

  private loadData() {
    const filePath = this.resolveDataPath();
    const raw = fs.readFileSync(filePath, 'utf-8');
    const parsed = JSON.parse(raw);
    this.comments = parsed.map((c) => ({
      id: uuid(),
      postTitle: c['Post Title'],
      comment: c['Comment'],
      sentiment: c['Sentiment'],
      commentDate: c['Comment Date'],
      suggestion1: c['Suggestion 1'],
      suggestion2: c['Suggestion 2'],
      suggestion3: c['Suggestion 3'],
      isReplied: false,
      ratings: {},
    }));
  }

  findAll(): Comment[] {
    return this.comments;
  }

  findOne(id: string): Comment {
    const comment = this.comments.find((c) => c.id === id);
    if (!comment) throw new NotFoundException(`Comment ${id} not found`);
    return comment;
  }

  create(dto: CreateCommentDto): Comment {
    const newComment: Comment = {
      id: uuid(),
      ...dto,
      isReplied: false,
      ratings: {},
    };
    this.comments.push(newComment);
    return newComment;
  }

  update(id: string, dto: UpdateCommentDto): Comment {
    const comment = this.findOne(id);
    Object.assign(comment, dto);
    return comment;
  }

  rateSuggestion(id: string, dto: RateSuggestionDto) {
    const comment = this.findOne(id);
    const key = `suggestion${dto.suggestionNumber}`;
    if (!comment.ratings) comment.ratings = {};
    if (!comment.ratings[key]) comment.ratings[key] = [];
    comment.ratings[key].push(dto.rating);
    return comment;
  }

  remove(id: string): void {
    this.comments = this.comments.filter((c) => c.id !== id);
  }
}
