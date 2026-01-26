import "@/styles/globals.css";

import {Navbar} from "@/components/common/navbar";

import {Footer} from "@/components/common/footer";
import Main from "@/components/primitives/Main";
import DataProvider from "@/providers/data-provider";
import {Suspense} from "react";
import Loading from "@/app/[locale]/(public)/loading";

export default async function PublicLayout({children}: {
	children: React.ReactNode;
}) {
	return (
		<Main>
			<DataProvider/>
			<Navbar/>
			<Suspense fallback={<Loading/>}>
				{children}
			</Suspense>
			<Footer/>
		</Main>
	);
}
