
export interface APIResponse<T> {
    message: string,
    statusCode: number,
    success: boolean,
    data: T
}
export type Image = {
    localPath: string,
    url: string,
    _id: string

}
export type User = {
    __v: number,
    _id: string,
    avatar: Image,
    createdAt: string,
    email: string,
    isEmailVerified: boolean,
    // loginType: EMAIL_PASSWORD,
    role: 'ADMIN' | 'USER',
    updatedAt: string,
    username: string
}
export type Category = {
    __v: number,
    _id: string,
    updatedAt: string,
    createdAt: string,
    owner: string
    name: string


}

type PaginationContent = {
    limit: number,
    page: number,
    totalPages: number,
    serialNumberStartFrom: number,
    hasPrevPage: boolean,
    hasNextPage: boolean,
    prevPage: null | number,
    nextPage: null | number
}

export type Categories = PaginationContent & {

    totalCategories: number,
    categories: Category[],

}
export type Product = {
    __v: number,
    _id: string,
    category: string,
    createdAt: string,
    description: string,
    mainImage: Image,
    name: string,
    owner: string,
    price: number,
    stock: number,
    subImages: Image[],
    updatedAt: string
}
export type Products = PaginationContent & {

    totalProducts: number,
    products: Product[],

}

export type Error = {
    errors?: Record<string, string[]>;
    statusCode: number;
    message: string,
    success: boolean,
}