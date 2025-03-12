import {IForm} from '@/base-ui/dynamic-form/types'

export const SearchFormConfig: IForm = {
    labelWidth: '120px',
    formItems: [
        {
            field: 'name',
            type: 'input',
            label: '角色名',
            placeholder: '请输入角色名'
        },
        {
            field: 'intro',
            type: 'input',
            label: '角色简介',
            placeholder: '请输入角色简介'
        },
        {
            field: 'createAt',
            type: 'datepicker',
            label: '创建时间',
            otherOptions: {
                type: 'daterange',
                startPlaceholder: '开始时间',
                endPlaceholder: '结束时间'
            }
        }
    ]
}
