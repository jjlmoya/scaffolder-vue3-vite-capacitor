import axios from '@/api/clients/axios'
import CoreRepository from './CoreRepository'

export default {
    core: CoreRepository(axios)
}
