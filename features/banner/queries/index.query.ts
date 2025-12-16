import { useQueryClient } from '@tanstack/react-query';

// 1- Clé de cache pour les bannières
export const bannersKeyQuery = (...params: any[]) => {
	if (params.length === 0) {
		return ['banners'];
	}
	return ['banners', ...params];
};

// 2. Hook personnalisé pour l'invalidation des bannières
export const useInvalidateBannersQuery = () => {
	const queryClient = useQueryClient();

	return async (...params: any[]) => {
		await queryClient.invalidateQueries({
			queryKey: bannersKeyQuery(...params),
			exact: false
		});

		await queryClient.refetchQueries({
			queryKey: bannersKeyQuery(),
			type: 'active'
		});
	};
};
