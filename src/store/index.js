import { configureStore } from '@reduxjs/toolkit'
import ui from './uiSlice'
import gallery from './gallerySlice'
export const store = configureStore({ reducer: { ui, gallery } })
