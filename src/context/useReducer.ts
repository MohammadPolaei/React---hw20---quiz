import type { Dispatch } from "react";
import type { FormDataFetch } from "../components/quiz-setup/quiz-setup";

export type ActionType =
	| { type: "UPDATE_SCORE" }
	| { type: "NEXT_QUESTION" }
	| { type: "RESET_QUIZ" };

export type StateType = {
	score: number;
	currentQuestionIndex: number;
	count: number;
};

export const initialState = {
	score: 0,
	currentQuestionIndex: 0,
	count: 0,
};
export type quizContextType = {
	state: StateType;
	dispatch: Dispatch<ActionType>;
	formConfig: FormDataFetch;
	setFormConfig: (formConf: FormDataFetch) => void;
};

export function quizReducer(state: StateType, action: ActionType) {
	switch (action.type) {
		case "NEXT_QUESTION":
			return { ...state, currentQuestionIndex: state.currentQuestionIndex + 1 };
		case "UPDATE_SCORE":
			return { ...state, score: state.score + 1 };
		case "RESET_QUIZ":
			return { ...initialState };
		default:
			return state;
	}
}
