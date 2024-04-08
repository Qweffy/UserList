import { User } from 'types/UserTypes'

export type RootStackParamList = {
  Login: undefined
  HomeTabNavigator: undefined
  ItemDetail: { user: User }
}
