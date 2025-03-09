export interface PropListInfo {
    prop?: string
    label: string
    minWidth?: string
    slotName?: string
}

export interface ColumnConfigInfo {
    title: string
    propList: Array<PropListInfo>
    showIndexColumn: boolean
    showSelectColumn: boolean
}
