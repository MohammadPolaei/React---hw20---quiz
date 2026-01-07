export async function quizData(formData: any) {
	const { numberOfQuestion, category, difficulty } = formData;
	const data = await fetch(
		`https://opentdb.com/api.php?amount=${numberOfQuestion}&category=${category}&difficulty=${difficulty}`
	);
	return data.json();
}
