import React from 'react';
import {Button} from "@heroui/button";

type ActualiteErrorsProps = {
	isError: boolean;
	error: Error | null;
	message?: string;
	refetch?: () => void;
};

function ActualiteErrors({isError, error, message, refetch}: ActualiteErrorsProps) {
	return (
		<>
			{isError && (
				<div className="mt-8 text-center">
					<p className="text-red-600">{message || 'Une erreur est survenue lors du chargement des actualités.'}</p>
					{error && <div className="mt-2 text-sm text-red-600">{error.message}</div>}
					{refetch && (
						<Button
							onPress={refetch}
							variant="bordered"
							color="danger"
							className="mt-4 pointer"
						>
							Réessayer
						</Button>
					)}
				</div>
			)}
		</>
	);
}

export default ActualiteErrors;