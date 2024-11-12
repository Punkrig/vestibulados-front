import React from 'react';
import Button from '../Button';
import type { Quiz } from '../../model/quiz';

interface QuizCardProps {
  quiz: Quiz;
  onHost: (quiz: Quiz) => void;
}

const QuizCard: React.FC<QuizCardProps> = ({ quiz, onHost }) => {
  const handleHost = () => {
    onHost(quiz);
  };

  return (
    <div className="flex justify-between items-center bg-white border p-4 rounded-xl">
      <p>{quiz.name}</p>
      <Button onClick={handleHost}>Host</Button>
    </div>
  );
};

export default QuizCard;
