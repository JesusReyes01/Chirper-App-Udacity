import { getInitialData } from '../Utils/api'
import { receiveUsers } from '../Actions/users'
import { receiveTweets } from '../Actions/tweets'
import { setAuthedUser } from '../Actions/authedUser'

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData () {
    return (dispatch) => {
        return getInitialData()
            .then(({ users, tweets }) => {
                dispatch(receiveUsers(users))
                dispatch(receiveTweets(tweets))
                dispatch(setAuthedUser(AUTHED_ID))

            })
    }
}