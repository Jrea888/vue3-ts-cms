import {serviceRequest} from '../service-instance-request'
import {IDataType, ResponseUsersData} from '@/model'

class SystemService {
    public async getPageListData(url: string, queryInfo: any): Promise<ResponseUsersData> {
        const result = await serviceRequest.post<IDataType<ResponseUsersData>>({
            url,
            data: queryInfo
        })
        return result.data
    }
}

export default new SystemService()
