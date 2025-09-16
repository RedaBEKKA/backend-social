import { PartialType } from '@nestjs/swagger';
import { CreateCommentDto } from './create-comment.dto';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsOptional,
  IsBoolean,
  IsNumber,
  Min,
  Max,
  IsEnum,
} from 'class-validator';

export class UpdateCommentDto extends PartialType(CreateCommentDto) {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  isReplied?: boolean;
}

export class RateSuggestionDto {
  @ApiProperty({ example: 1, enum: [1, 2, 3] })
  @IsEnum([1, 2, 3])
  suggestionNumber: 1 | 2 | 3;

  @ApiProperty({ example: 5, minimum: 1, maximum: 5 })
  @IsNumber()
  @Min(1)
  @Max(5)
  rating: number;
}
