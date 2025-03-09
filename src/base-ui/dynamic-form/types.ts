type IFormType = 'input' | 'password' | 'select' | 'radio' | 'checkbox' | 'date' | 'datepicker' | 'textarea'

export interface IFormItem {
    field: string
    type: IFormType
    label: string
    placeholder?: string
    rules?: Array<any>
    options?: Array<any>
    otherOptions?: any
    isHidden?: boolean
}

export interface IForm {
    formItems: Array<IFormItem>
    labelWidth?: string
    colLayout?: any
    itemStyle?: any
}
