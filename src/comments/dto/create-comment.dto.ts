import {
  IsString,
  IsNotEmpty,
  IsEnum,
  IsDateString,
  MaxLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCommentDto {
  @ApiProperty({ example: 'Bug Report' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  postTitle: string;

  @ApiProperty({ example: 'This product really changed my life!' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(1000)
  comment: string;

  @ApiProperty({
    example: 'Negative',
    enum: ['Positive', 'Negative', 'Neutral'],
  })
  @IsEnum(['Positive', 'Negative', 'Neutral'])
  sentiment: 'Positive' | 'Negative' | 'Neutral';

  @ApiProperty({ example: '2025-08-26' })
  @IsDateString()
  commentDate: string;

  @ApiProperty({ example: "Sorry to hear that. We're working on it." })
  @IsString()
  @IsNotEmpty()
  @MaxLength(500)
  suggestion1: string;

  @ApiProperty({ example: 'Your feedback helps us improve.' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(500)
  suggestion2: string;

  @ApiProperty({ example: "Thanks for reporting. We'll look into it." })
  @IsString()
  @IsNotEmpty()
  @MaxLength(500)
  suggestion3: string;
}
