// hash path utilities taken from ReactTraining's History package
// https://github.com/ReactTraining/history/blob/master/modules/createHashHistory.js
const getHashPath = (): string => {
  // Can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  const href = window.location.href
  const hashIndex = href.indexOf('#')
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1)
}

const pushHashPath = (path: string) => (window.location.hash = path)

const replaceHashPath = (path: string) => {
  const hashIndex = window.location.href.indexOf('#')

  window.location.replace(
    window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path,
  )
}

const getState = (path?: string) => {
  const pathname = path ? path : getHashPath()
  return { pathname, search: '' }
}

const resolveInitialState = (state: { pathname: string; search?: string }) => {
  if (state.pathname === '') {
    replaceHashPath('/')
  }
}

const createHashSource = () => {
  let state = getState()

  resolveInitialState(state)

  return {
    get location() {
      return getState()
    },
    addEventListener(name: any, fn: (this: Window, ev: any) => any) {
      window.addEventListener(name, fn)
    },
    removeEventListener(name: any, fn: (this: Window, ev: any) => any) {
      window.removeEventListener(name, fn)
    },
    history: {
      state,
      pushState(stateObj: any, _: any, uri: string) {
        state = getState(uri)
        pushHashPath(uri)
      },
      replaceState(stateObj: any, _: any, uri: string) {
        state = getState(uri)
        replaceHashPath(uri)
      },
    },
  }
}

export default createHashSource
