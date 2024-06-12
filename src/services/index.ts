import { SdkConfig } from '@/types/common'
import modules from './modules'
import client from './client'

const createSdk = (config: SdkConfig | undefined) => {
  config = Object.assign({ baseUrl: '' }, config)

  const configuredClient = client(config)

  return modules(configuredClient)
}

export default createSdk
