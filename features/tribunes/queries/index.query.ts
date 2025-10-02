import { useQueryClient } from '@tanstack/react-query';

// 1- Clé de cache
export const tribuneKeyQuery = (...params: any[]) => {
    if (params.length === 0) {
        return ['tribune'];
    }
    return ['tribune', ...params];
};

// 2. Créez un hook personnalisé pour l'invalidation
export const useInvalidateTribuneQuery = () => {
    const queryClient = useQueryClient();

    return async (...params: any[]) => {
        await queryClient.invalidateQueries({
            queryKey: tribuneKeyQuery(...params),
            exact: false
        });

        await queryClient.refetchQueries({
            queryKey: tribuneKeyQuery(),
            type: 'active'
        });
    };
};