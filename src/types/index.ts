export type User = {
_id: string;
name: string;
email: string;
token?: string;
};


export type Photo = {
_id: string;
owner: string; // user id
url: string;
title?: string;
createdAt?: string;
};