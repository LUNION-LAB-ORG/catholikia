import { useQueryClient } from '@tanstack/react-query';

// 1- Clé de cache
export const contributeurKeyQuery = (...params: any[]) => {
    if (params.length === 0) {
        return ['contributeur'];
    }
    return ['contributeur', ...params];
};

// 2. Créez un hook personnalisé pour l'invalidation
export const useInvalidateContributeurQuery = () => {
    const queryClient = useQueryClient();

    return async (...params: any[]) => {
        await queryClient.invalidateQueries({
            queryKey: contributeurKeyQuery(...params),
            exact: false
        });

        await queryClient.refetchQueries({
            queryKey: contributeurKeyQuery(),
            type: 'active'
        });
    };
};