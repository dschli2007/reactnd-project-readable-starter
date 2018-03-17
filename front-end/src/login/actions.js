export const USER_LOG_IN = 'USER_LOG_IN'
export const USER_LOG_OUT = 'USER_LOG_OUT'

export function userLogIn({ userName }) {
  return {
    type: USER_LOG_IN,
    userName
  }
}

export function userLogOut() {
  return {
    type: USER_LOG_OUT
  }
}
