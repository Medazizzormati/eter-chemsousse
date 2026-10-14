import { createSlice } from '@reduxjs/toolkit'
import { photos } from '../data/site'
const gallerySlice = createSlice({
  name: 'gallery',
  initialState: { items: photos, active: null },
  reducers: {
    openPhoto: (s, a) => { s.active = a.payload },
    closePhoto: (s) => { s.active = null },
    nextPhoto: (s) => { if (s.active !== null) s.active = (s.active + 1) % s.items.length },
    prevPhoto: (s) => { if (s.active !== null) s.active = (s.active - 1 + s.items.length) % s.items.length },
  },
})
export const { openPhoto, closePhoto, nextPhoto, prevPhoto } = gallerySlice.actions
export default gallerySlice.reducer
