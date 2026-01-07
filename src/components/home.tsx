import QuizQuestions from "./quiz-questions/quiz-questions";
import QuizSetup from "./quiz-setup/quiz-setup";

function Home() {
	return (
		<div className="w-full">
			{/* <Welcome /> */}
			<QuizSetup />
			<QuizQuestions />
			{/* <QuizResult /> */}
		</div>
	);
}

export default Home;
