import type { ReactNode } from "react";
import Header from "./header";

type IProps = { children: ReactNode };
function AppLayout({ children }: IProps) {
	return (
		<div className="bg-[#9334ea] text-white">
			<Header />
			{children}
		</div>
	);
}

export default AppLayout;
