import type { ReactNode } from "react";
import Header from "./header";

type IProps = { children: ReactNode };
function AppLayout({ children }: IProps) {
	return (
		<>
			<Header />
			{children}
		</>
	);
}

export default AppLayout;
