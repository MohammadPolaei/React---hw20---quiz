import { useForm } from "react-hook-form";

type FormData = {
	numberOfQuestion: number;
	category: string;
	difficulty: string;
};

function QuizSetup() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	const onSubmit = (data: FormData) => {
		console.log(data);
	};
	return (
		<div className="flex flex-col items-center justify-center py-20 w-full">
			<h1>Setup Quiz</h1>
			<form
				className="flex flex-col items-center gap-8 w-2/3"
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className="flex flex-col items-left justify-between gap-3 w-full">
					<label>Number Of Question</label>
					<input
						type="text"
						className=" w-full bg-yellow-400 text-[#000a] p-1 rounded-md outline-0"
						{...register("numberOfQuestion", {
							required: "Input must be field whith number between 5 and 55",
							validate: (value) =>
								(value < 55 && value > 5) || "Enter a number between 5 and 55",
						})}
					/>
					{errors.numberOfQuestion && (
						<p className="text-red-800 text-sm p-1 rounded-md bg-[#fff8] w-1/2">
							{errors.numberOfQuestion.message}
						</p>
					)}

					<label>Category</label>
					<select
						className=" w-full bg-yellow-400 text-[#000a] p-1 rounded-md outline-0"
						{...register("category", {
							validate: (value) => value !== "select" || "choose a category",
							required: "choose a category",
						})}
					>
						<option>select</option>
						<option>Genereal Knowlodge</option>
						<option>Sports</option>
						<option>Geography</option>
					</select>
					<div>
						{errors.category && (
							<p className="text-red-800 text-sm p-1 rounded-md bg-[#fff8] w-1/2">
								{errors.category.message}
							</p>
						)}
					</div>
					<label>Difficulty</label>
					<select
						className=" w-full bg-yellow-400 text-[#000a] p-1 rounded-md outline-0"
						{...register("difficulty", {
							validate: (value) =>
								value !== "select" || "choose difficulty level",
							required: "choose difficulty level",
						})}
					>
						<option>select</option>
						<option>Medium</option>
						<option>Hard</option>
						<option>Easy</option>
					</select>
					{errors.difficulty && (
						<p className="text-red-800 text-sm p-1 rounded-md bg-[#fff8] w-1/2">
							{errors.difficulty.message}
						</p>
					)}
				</div>
				<button className="flex flex-col items-center cursor-pointer">
					<img
						src="../../../src/assets/images/startButton.png"
						alt="start button"
						className="w-15 hover:w-16"
					/>
				</button>
			</form>
		</div>
	);
}

export default QuizSetup;
