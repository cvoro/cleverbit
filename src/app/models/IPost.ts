import { IComment } from './IComment';

export interface IPost {
    title: string;
    description: string;
    id: number;
    comments: IComment[];
    likes: number;
}