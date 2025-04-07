export interface login {
    username: string;
    password: string;
}

export interface register {
    username: string;
    password: string;
    email: string;
    role?: string;
    task?: Task;
}

export interface Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;
  }