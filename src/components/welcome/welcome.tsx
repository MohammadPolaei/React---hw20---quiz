function Welcome() {
	return (
		<div className="flex flex-col justify-between items-center">
			<div className="font-bold text-xl py-50">Welcome To Quiz App</div>
			<div className="flex flex-col justify-between items-center gap-3">
				<button className="font-bold cursor-pointer hover:text-xl hover:shadow-2xl">
					GET START
				</button>
				<p className="text-3xl">🚀</p>
			</div>
		</div>
	);
}

export default Welcome;
