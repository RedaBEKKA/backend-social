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
  ratings?: { [key: string]: number[] };
}
