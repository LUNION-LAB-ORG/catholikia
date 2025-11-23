import { useQueryClient } from '@tanstack/react-query';

// 1- Clé de cache
export const dioceseKeyQuery = (...params: any[]) => {
    if (params.length === 0) {
        return ['diocese'];
    }
    return ['diocese', ...params];
};

// 2. Créez un hook personnalisé pour l'invalidation
export const useInvalidateDioceseQuery = () => {
    const queryClient = useQueryClient();

    return async (...params: any[]) => {
        await queryClient.invalidateQueries({
            queryKey: dioceseKeyQuery(...params),
            exact: false
        });

        await queryClient.refetchQueries({
            queryKey: dioceseKeyQuery(),
            type: 'active'
        });
    };
};