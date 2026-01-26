import React from 'react';
import {Loader2} from "lucide-react";
import {Logo} from "@/components/icons";

function Loading() {
	return (
		<div className="h-screen flex items-center justify-center flex-col space-y-2">
			<div className="flex gap-2 items-center ">
				<Logo
					width={216}
				/>
			</div>
			<span className="inline-flex gap-1 items-center">
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Loading...
      </span>
		</div>
	);
}

export default Loading;