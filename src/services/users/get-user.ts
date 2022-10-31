import { ApiContext, User } from 'types'
import { fetcher } from 'utils'

export type GetUserParams = {
  id: number
}

const getUser = async (context: ApiContext, params: GetUserParams): Promise<User> => {
  const { id } = params
  return await fetcher(`${context.apiRootUrl.replace(/\/$/g, '')}/users/${id}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
}

export default getUser
