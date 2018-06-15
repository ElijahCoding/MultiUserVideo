export const setMeName = (state, name) => {
  state.state.name = name
}

export const addPeer = (state, { video, peer }) => {
  state.clients.push({ video, peer })
}
