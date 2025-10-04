import { useQueryClient } from '@tanstack/react-query';

// 1- Clé de cache
export const vieDeFoiKeyQuery = (...params: any[]) => {
    if (params.length === 0) {
        return ['vie-de-foi'];
    }
    return ['vie-de-foi', ...params];
};

// 2. Créez un hook personnalisé pour l'invalidation
export const useInvalidateVieDeFoiQuery = () => {
    const queryClient = useQueryClient();

    return async (...params: any[]) => {
        await queryClient.invalidateQueries({
            queryKey: vieDeFoiKeyQuery(...params),
            exact: false
        });

        await queryClient.refetchQueries({
            queryKey: vieDeFoiKeyQuery(),
            type: 'active'
        });
    };
};