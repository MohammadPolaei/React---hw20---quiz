function QuizSetup() {
	return (
		<div className="flex flex-col items-center justify-center py-20 w-full">
			<h1>Setup Quiz</h1>
			<form className="flex flex-col items-center gap-8 w-2/3">
				<div className="flex flex-col items-left justify-between gap-3 w-full">
					<label>Number Of Question</label>
					<input
						type="text"
						className=" w-full bg-yellow-400 text-[#000a] p-1 rounded-md outline-0"
					/>
					<label>Category</label>
					<select className=" w-full bg-yellow-400 text-[#000a] p-1 rounded-md outline-0">
						<option>History</option>
						<option>sth else</option>
					</select>
					<label>Difficulty</label>
					<select className=" w-full bg-yellow-400 text-[#000a] p-1 rounded-md outline-0">
						<option>Medium</option>
						<option>Hard</option>
						<option>Easy</option>
					</select>
				</div>
				<button>
					<p className="font-semibold">START</p>
					{/* <img src="" alt="" /> */}
					button
				</button>
			</form>
		</div>
	);
}

export default QuizSetup;
