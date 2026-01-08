import { createContext, useReducer, useState, type ReactNode } from "react";
import type { FormDataFetch } from "../components/quiz-setup/quiz-setup";
import { initialState, quizReducer, type quizContextType } from "./useReducer";

export const QuizContext = createContext<quizContextType | null>(null);

export const QuizProvider = ({ children }: { children: ReactNode }) => {
	const [state, dispatch] = useReducer(quizReducer, initialState);
	const [formConfig, setFormConfig] = useState<FormDataFetch>({
		numberOfQuestion: 0,
		category: "",
		difficulty: "",
	});
	return (
		<QuizContext.Provider
			value={{ state, dispatch, formConfig, setFormConfig }}
		>
			{children}
		</QuizContext.Provider>
	);
};
