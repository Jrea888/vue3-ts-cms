import {ref} from 'vue'
import PageContent from '@/components/page-content.vue'

export function useUserPageSearch(): Array<any> {
    const pageContentRef = ref<InstanceType<typeof PageContent>>()

    const searchHandle = (formData: Record<string, string>): void => {
        pageContentRef.value?.getPageTableData({...formData})
    }

    const resetHandle = (): void => {
        pageContentRef.value?.getPageTableData()
    }

    return [pageContentRef, searchHandle, resetHandle]
}
