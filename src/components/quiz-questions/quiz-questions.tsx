import { useContext, useEffect, useState } from "react";
import { QuizContext } from "../../context/useContext";
import { quizData } from "../constants/API";

function QuizQuestions() {
	const quizState = useContext(QuizContext)!;

	const { state, dispatch } = quizState;
	const { count, currentQuestionIndex, score } = state;
	// form state to change fetch data
	const { formConfig, setFormConfig } = quizState;
	const { numberOfQuestion, category, difficulty } = formConfig;

	// questions
	const [question, setQuestion] = useState("");
	const [answers, setAnswers] = useState({
		answer1: "",
		answer2: "",
		answer3: "",
		answer4: "",
	});

	useEffect(() => {
		const quizFetchedData = quizData({
			numberOfQuestion: numberOfQuestion,
			category: 9,
			difficulty: difficulty,
		}).then((res) => {
			setQuestion(res.results[currentQuestionIndex].question);
			setAnswers({
				answer1: res.results[currentQuestionIndex].correct_answer,
				answer2: res.results[currentQuestionIndex].incorrect_answers[0],
				answer3: res.results[currentQuestionIndex].incorrect_answers[1],
				answer4: res.results[currentQuestionIndex].incorrect_answers[2],
			});
		});
	}, [formConfig]);

	return (
		<div className="flex flex-col items-center gap-5 justify-between w-full text-black">
			<div className="w-full bg-white rounded-md p-5 shadow-xl">{question}</div>
			<button className="w-full p-3 shadow-xl bg-[#5fead5] rounded-md text-left cursor-pointer">
				{answers.answer1}
			</button>
			<button className="w-full p-3 shadow-xl bg-[#5fead5] rounded-md text-left cursor-pointer">
				{answers.answer2}
			</button>
			<button className="w-full p-3 shadow-xl bg-[#5fead5] rounded-md text-left cursor-pointer">
				{answers.answer3}
			</button>
			<button className="w-full p-3 shadow-xl bg-[#5fead5] rounded-md text-left cursor-pointer">
				{answers.answer4}
			</button>
		</div>
	);
}

export default QuizQuestions;
