/* eslint-disable no-unused-vars */

import {PageData} from '@models/Common';

export interface UserCreate {
    email: string;
    name: string;
    password: string;
    receive_notifications?: boolean;
}

export interface UserGet extends Omit<UserCreate, 'password'> {
    id: string;
    created_at?: Date;
    updated_at?: Date;
    user_id?: string;
}

export interface PaginatedUserList {
    users: UserGet[];
    page_data? : PageData;
}


export enum UserPermissions {
    WriteUser = 'write:users',
    ReadUser = 'read:users',
    DeleteUser = 'delete:users'
}

export interface Auth0UserCreate {
    email: string;
    email_verified: boolean;
    name: string;
    connection: string;
    password: string;
  }

export interface Auth0User extends Auth0UserCreate {
    user_id: string;
    [key: string] : unknown;
  }
