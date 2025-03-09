<template>
    <div class="dynamic-form">
        <el-form :label-width="labelWidth">
            <el-row>
                <template v-for="item in formItems" :key="item.field">
                    <el-col v-bind="colLayout">
                        <el-form-item
                            :label="`${item.label}:`"
                            :rules="item.rules"
                            :style="itemStyle"
                            v-if="!item.isHidden"
                        >
                            <template v-if="item.type === 'input' || item.type === 'password'">
                                <el-input
                                    v-bind="item.otherOptions"
                                    :placeholder="item.placeholder"
                                    :show-password="item.type === 'password'"
                                    v-model="formData[item.field]"
                                />
                            </template>
                            <template v-if="item.type === 'select'">
                                <el-select
                                    v-bind="item.otherOptions"
                                    :placeholder="item.placeholder"
                                    style="width: 100%"
                                    v-model="formData[item.field]"
                                >
                                    <el-option
                                        v-for="option in item.options"
                                        :key="option.value"
                                        :label="option.label"
                                        :value="option.value"
                                    >
                                        {{ option.label }}
                                    </el-option>
                                </el-select>
                            </template>
                            <template v-if="item.type === 'datepicker'">
                                <el-date-picker
                                    style="width: 100%"
                                    :placeholder="item.placeholder"
                                    v-bind="item.otherOptions"
                                    v-model="formData[item.field]"
                                />
                            </template>
                        </el-form-item>
                    </el-col>
                </template>
            </el-row>
        </el-form>

        <div class="form-footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, PropType, ref, watch} from 'vue'
import {IFormItem} from '../types'

export default defineComponent({
    name: 'dynamic-form',
    props: {
        modelValue: {
            type: Object,
            required: true
        },
        formItems: {
            type: Array as PropType<IFormItem[]>,
            default: () => []
        },
        labelWidth: {
            type: String,
            default: '100px'
        },
        itemStyle: {
            type: Object,
            default: () => ({padding: '10px 40px'})
        },
        colLayout: {
            type: Object,
            default: () => ({
                xl: 6,
                lg: 8,
                md: 12,
                sm: 24,
                xs: 24
            })
        }
    },
    emits: ['update:modelValue'],
    setup(props, {emit}) {
        const formData = ref()

        watch(
            () => props.modelValue,
            () => {
                formData.value = {...props.modelValue}
            },
            {deep: true, immediate: true}
        )

        watch(
            formData,
            newVal => {
                emit('update:modelValue', newVal)
            },
            {deep: true}
        )

        return {
            formData
        }
    }
})
</script>

<style scoped lang="less">
.dynamic-form {
}
</style>
