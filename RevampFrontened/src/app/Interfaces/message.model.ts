// message.model.ts
import {UserModel} from "./User";

export interface MessageModel {
    id: number;
    sender: UserModel;  // Assuming UserModel represents the structure of the User entity
    receiver: UserModel;  // Assuming UserModel represents the structure of the User entity
    content: string;
    timestamp: string;  // You might want to use a proper date type based on your backend response
}
