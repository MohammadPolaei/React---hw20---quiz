import "./App.css";
import { QuizProvider } from "./context/useContext";
import HomePage from "./pages/home-page";

function App() {
	return (
		<QuizProvider>
			<HomePage />
		</QuizProvider>
	);
}

export default App;
