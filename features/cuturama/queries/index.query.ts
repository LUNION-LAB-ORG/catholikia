import { useQueryClient } from "@tanstack/react-query";

export const cuturamaKeyQuery = (...params: unknown[]) => {
    if (params.length === 0) {
        return ["cuturama"];
    }
    return ["cuturama", ...params];
};

export const useInvalidateCuturamaQuery = () => {
    const queryClient = useQueryClient();

    return async (...params: unknown[]) => {
        await queryClient.invalidateQueries({
            queryKey: cuturamaKeyQuery(...params),
            exact: false,
        });

        await queryClient.refetchQueries({
            queryKey: cuturamaKeyQuery(),
            type: "active",
        });
    };
};
