import { createSlice } from '@reduxjs/toolkit'
// introPhase: 'playing' (video on screen) -> 'leaving' (site mounts underneath, camera zooms through) -> 'done'
const uiSlice = createSlice({
  name: 'ui',
  initialState: { menuOpen: false, introPhase: 'playing' },
  reducers: {
    toggleMenu: (s) => { s.menuOpen = !s.menuOpen },
    closeMenu: (s) => { s.menuOpen = false },
    startLeaving: (s) => { if (s.introPhase === 'playing') s.introPhase = 'leaving' },
    finishIntro: (s) => { s.introPhase = 'done' },
    replayIntro: (s) => { s.introPhase = 'playing'; s.menuOpen = false },
  },
})
export const { toggleMenu, closeMenu, startLeaving, finishIntro, replayIntro } = uiSlice.actions
export default uiSlice.reducer
