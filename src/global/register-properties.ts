import {App} from 'vue'
import {formatUtcTime} from '@/utils/date-format'

export default function registerProperties(app: App): void {
    app.config.globalProperties.$filters = {
        foo() {
            console.log('返回 foo')
            return 'foo'
        },
        formatTime(value: string) {
            return formatUtcTime(value)
        }
    }
}
