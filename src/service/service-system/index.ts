import {serviceRequest} from '../service-instance-request'
import {IDataType, ResponseTableListData} from '@/model'

class SystemService {
    public async getPageListData<T>(url: string, queryInfo: any): Promise<ResponseTableListData<T>> {
        const result = await serviceRequest.post<IDataType<ResponseTableListData<T>>>({
            url,
            data: queryInfo
        })
        return result.data
    }
}

export default new SystemService()
