import {IForm} from '@/base-ui/dynamic-form/types'

export const searchFormConfig: IForm = {
    labelWidth: '120px',
    colLayout: {
        span: 8
    },
    itemStyle: {
        padding: '20px 40px 10px'
    },
    formItems: [
        {
            field: 'id',
            label: '用户ID',
            type: 'input',
            placeholder: '请输入用户ID'
        },
        {
            field: 'name',
            label: '用户名',
            type: 'input',
            placeholder: '请输入用户名'
        },
        {
            field: 'realname',
            label: '真实姓名',
            type: 'input',
            placeholder: '请输入真实姓名'
        },
        {
            field: 'cellphone',
            label: '电话号码',
            type: 'input',
            placeholder: '请输入电话号码'
        },
        {
            field: 'enable',
            label: '用户状态',
            type: 'select',
            placeholder: '请选择状态',
            options: [
                {
                    label: '启用',
                    value: 1
                },
                {
                    label: '禁用',
                    value: 0
                }
            ]
        },
        {
            field: 'createAt',
            label: '创建时间',
            type: 'datepicker',
            placeholder: '请选择创建时间',
            otherOptions: {
                startPlaceholder: '开始时间',
                endPlaceholder: '结束时间',
                type: 'daterange'
            }
        }
    ]
}
