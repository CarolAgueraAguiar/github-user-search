export type ServiceRequest<Params = void, Response = any> = (
  args: Params
) => Promise<ServiceResponse<Response>>

export type ServiceResponse<T> = [T | null, any]
