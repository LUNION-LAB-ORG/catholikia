import { useQueryClient } from '@tanstack/react-query';

// 1- Clé de cache
export const eventKeyQuery = (...params: any[]) => {
    if (params.length === 0) {
        return ['event'];
    }
    return ['event', ...params];
};

// 2. Créez un hook personnalisé pour l'invalidation
export const useInvalidateEventQuery = () => {
    const queryClient = useQueryClient();

    return async (...params: any[]) => {
        await queryClient.invalidateQueries({
            queryKey: eventKeyQuery(...params),
            exact: false
        });

        await queryClient.refetchQueries({
            queryKey: eventKeyQuery(),
            type: 'active'
        });
    };
};