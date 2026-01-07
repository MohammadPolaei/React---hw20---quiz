import { useContext, useEffect } from "react";
import { QuizContext } from "../../context/useContext";
import { quizData } from "../constants/API";

function QuizQuestions() {
	const quizState = useContext(QuizContext)!;

	const { state, dispatch } = quizState;
	const { count, currentQuestionIndex, score } = state;
	// form state to change fetch data
	const { formConfig, setFormConfig } = quizState;
	const { numberOfQuestion, category, difficulty } = formConfig;
	useEffect(() => {
		const quizFetchedData = quizData({
			numberOfQuestion: numberOfQuestion,
			category: 9,
			difficulty: difficulty,
		}).then((res) => console.log(res));
	}, [formConfig]);

	return (
		<div className="flex flex-col items-center gap-5 justify-between w-full text-black">
			<div className="w-full bg-white rounded-md p-5 shadow-xl">Questions</div>
			<button className="w-full p-3 shadow-xl bg-[#5fead5] rounded-md text-left cursor-pointer">
				1
			</button>
			<button className="w-full p-3 shadow-xl bg-[#5fead5] rounded-md text-left cursor-pointer">
				2
			</button>
			<button className="w-full p-3 shadow-xl bg-[#5fead5] rounded-md text-left cursor-pointer">
				3
			</button>
			<button className="w-full p-3 shadow-xl bg-[#5fead5] rounded-md text-left cursor-pointer">
				4
			</button>
		</div>
	);
}

export default QuizQuestions;
