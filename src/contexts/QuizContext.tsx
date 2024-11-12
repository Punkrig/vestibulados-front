import { createContext, ReactNode, useState, useContext } from "react";
import { api } from "../services/apiClient";
import { toast } from "react-toastify";
import { Quiz } from "../model/quiz";

type QuizContextData = {
  createQuiz: (subjects: string[]) => Promise<Quiz>;
  quizzes: QuizProps[];
  error: string | null;
};

type QuizProps = {
  id: string;
  title: string;
  subjects: string[];
};

type QuizProviderProps = {
  children: ReactNode;
};

export const QuizContext = createContext({} as QuizContextData);

export const QuizProvider = ({ children }: QuizProviderProps) => {
  const [quizzes, setQuizzes] = useState<QuizProps[]>([]);
  const [error, setError] = useState<string | null>(null);

  async function createQuiz(subjects: string[]) {
    setError(null);

    try {
      const response = await api.post('/api/quiz/create', { subjects });
      setQuizzes([...quizzes, response.data]); // Update local state with new quiz
      toast.success("Quiz created successfully!");
      return response.data
    } catch (err) {
      setError("Failed to create quiz");
      toast.error("Error creating quiz!");
      console.error(err);
    }
  }

  return (
    <QuizContext.Provider value={{ createQuiz, quizzes, error }}>
      {children}
    </QuizContext.Provider>
  );
};

// Hook for easy access to QuizContext
export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
};
