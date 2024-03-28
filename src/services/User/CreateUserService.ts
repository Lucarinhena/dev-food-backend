interface UserRequest {
  name: string;
  email: string;
  password: string;
}

export class CreateUserService {
  async executable({ name, email, password }: UserRequest) {
    return { ok: true };
  }
}
