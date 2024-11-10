export interface Quiz {
  id: string;
  name: string;
  questions: QuizQuestion[];
}

export interface Player {
  id: string;
  name: string;
}

export interface QuizQuestion {
  id: string;
  name: string;
  subject: string;
  content: Content
  choices: QuizChoice[];
}

export interface Content {
  Type: string,
  Data: string,
}

export interface QuizChoice {
  id: string;
  name: string;
  correct: boolean;
}
