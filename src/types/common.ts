import React from 'react'
import { AnyAction } from 'redux'

export type AppDispatch = React.Dispatch<AnyAction>
export interface SdkConfig {
  baseUrl?: string | undefined
  fulfilled: (res?: unknown, req?: unknown) => void
}
export type HttpMethod =
  | 'GET'
  | 'OPTIONS'
  | 'HEAD'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'TRACE'
  | 'CONNECT'

export type ReqObj = {
  url: string
  method: HttpMethod
  data: any
} & SdkConfig
