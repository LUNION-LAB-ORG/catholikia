import { useQueryClient } from '@tanstack/react-query';

// 1- Clé de cache
export const effataKeyQuery = (...params: any[]) => {
    if (params.length === 0) {
        return ['effata'];
    }
    return ['effata', ...params];
};

// 2. Créez un hook personnalisé pour l'invalidation
export const useInvalidateEffataQuery = () => {
    const queryClient = useQueryClient();

    return async (...params: any[]) => {
        await queryClient.invalidateQueries({
            queryKey: effataKeyQuery(...params),
            exact: false
        });

        await queryClient.refetchQueries({
            queryKey: effataKeyQuery(),
            type: 'active'
        });
    };
};