import { useQueryClient } from '@tanstack/react-query';

// 1bis- Clé de cache pour Lectio Divina
export const lectioKeyQuery = (...params: any[]) => {
  if (params.length === 0) {
    return ['lectio'];
  }
  return ['lectio', ...params];
};

// 2. Hook d'invalidation Lectio Divina
export const useInvalidateLectioQuery = () => {
  const queryClient = useQueryClient();

  return async (...params: any[]) => {
    await queryClient.invalidateQueries({
      queryKey: lectioKeyQuery(...params),
      exact: false
    });

    await queryClient.refetchQueries({
      queryKey: lectioKeyQuery(),
      type: 'active'
    });
  };
};