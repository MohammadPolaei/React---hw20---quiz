function QuizResult() {
	return (
		<div className="flex flex-col items-center justify-between gap-20 h-100">
			<div className="flex flex-col items-center">
				<div>FAILED</div>
				<p>TRY MORE</p>
			</div>
			<p>YOUR SCORE = </p>
			<button className="cursor-pointer font-bold ">AGAIN</button>
		</div>
	);
}

export default QuizResult;
