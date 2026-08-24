import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//Вход запрос
export interface LoginRequest {
    email: string;
    password: string;
}

//Регистрация запрос
export interface RegisterRequest {
    email: string;
    password: string;
    name: string;
    surname: string;
}

// Ответ
export interface Response {
    result?: boolean;
}

export interface ResponseError {
    status?: number;
    data?: {
        result?: boolean;
        error?: string
    };
}

// Проофиль ответ
export interface ProfileResponse {
    favorites: string[];
    email: string;
    name: string;
    surname: string;
}

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://cinemaguide.skillbox.cc/",
        credentials: "include",
    }),
    tagTypes: ["UserProfile"],
    endpoints: build => ({
        register: build.mutation<Response, RegisterRequest>({
            query: (userData) => {
                const body = new URLSearchParams();
                body.append("email", userData.email);
                body.append("password", userData.password);
                body.append("name", userData.name);
                body.append("surname", userData.surname);

                return {
                    url: "/user",
                    method: "POST",
                    body: body,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                }
            }
        }),
        login: build.mutation<Response, LoginRequest>({
            query: (userData) => {
                const body = new URLSearchParams();
                body.append("email", userData.email);
                body.append("password", userData.password);

                return {
                    url: "/auth/login",
                    method: "POST",
                    body,
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                };
            },
            invalidatesTags: ["UserProfile"],
        }),

        logout: build.mutation<Response, void>({
            query: () => ({
                url: "/auth/logout",
                method: "GET",
            }),
            invalidatesTags: (data) => {
                if (data?.result) {
                    return ["UserProfile"]
                }
                return []
            },

        }),
        profile: build.query<ProfileResponse, void>({
            query: () => ({
                url: "/profile",
                method: "GET",
            }),
            providesTags: ["UserProfile"],
        })

    }),
})

export const { useLoginMutation, useRegisterMutation, useLogoutMutation, useProfileQuery } = authApi;