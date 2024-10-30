export type User = {
  id: string;
  fullname: string;
  email: string;
  user_id: string;
  role: string;
  create_at: Date;
  update_at: Date;
  password?: string;
};
