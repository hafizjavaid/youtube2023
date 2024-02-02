
import { defineStore } from 'pinia'
import axios from '@/plugins/axios'
import type { APIResponse, Category, Categories } from '@/types/index'

export const useCategoryStore = defineStore('CategoryStore', {
    state: () => ({

        categoriesData: {} as Categories

    }),

    actions: {


        async createCategory(form: Record<string, string>) {

            return new Promise<Category>(async (resolve, reject) => {

                try {

                    const { data } = await axios.post<APIResponse<Category>>('/ecommerce/categories', {
                        ...form
                    });
                    console.log('categories', data.data);


                    resolve(data.data)
                } catch (error) {
                    reject(error)
                }

            })

        },
        async getCategories(page: number, limit: number) {

            return new Promise<Categories>(async (resolve, reject) => {

                try {

                    const { data } = await axios.get<APIResponse<Categories>>(`/ecommerce/categories?page=${page}&limit=${limit}`);
                    console.log('categories', data.data);
                    this.categoriesData = data.data
                    resolve(data.data)
                } catch (error) {
                    reject(error)
                }

            })

        },



    },
})
