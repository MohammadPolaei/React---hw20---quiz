import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AppLayout from "./layout/layout.tsx";

createRoot(document.getElementById("root")!).render(
	<AppLayout>
		<App />
	</AppLayout>
);
