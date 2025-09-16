export interface Comment {
  id: string;

  postTitle: string;

  comment: string;

  sentiment: 'Positive' | 'Negative' | 'Neutral';

  commentDate: string;

  suggestion1: string;

  suggestion2: string;

  suggestion3: string;

  isReplied?: boolean;

  reply?: string;

  repliedAt?: string;

  suggestion1Rating?: number;

  suggestion2Rating?: number;

  suggestion3Rating?: number;
}
