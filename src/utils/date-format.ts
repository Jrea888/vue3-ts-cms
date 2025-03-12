import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'

/**
 * 例如: 2025-03-11T15:25:52.000Z
 * @param utcString UTC时间字符串
 * @param format 格式化字符串
 * @returns 格式化后的时间字符串
 */
export function formatUtcTime(utcString: string, format: string = DATE_TIME_FORMAT): string {
    return dayjs.utc(utcString).format(format)
}

/**
 * 例如: 1633072800000
 * @param times 时间戳
 * @param format 格式化字符串
 * @returns 格式化后的时间字符串
 */
export function formatTimes(times: number, format: string = DATE_TIME_FORMAT): string {
    return dayjs(times).format(format)
}
