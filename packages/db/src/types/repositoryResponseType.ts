

export type RepositoryResponseType<T> = {
    success: true,
    data: T
} | {
    success: false
}