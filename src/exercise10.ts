type UserAccount = {
  id: string;
  createdAt: Date;
  email: string;
  passwordHash: string;
  profile: {
    bio: string;
    avatarUrl: string;
  }
};

export class UserRegistry {
  private Register: Map<string, UserAccount> = new Map();
  public registerUser(
    data: Omit<UserAccount, 'id' | 'createdAt'>,
  ): UserAccount {
    let newUser: userAccount = data;
    newUser.id = Math.random().toString(16).slice(2);
    newUser.createdAt = new Date();
    this.Register.set(newUser.id, newUser);
    return newUser;
  }

  public getUserView(
    id: string,
  ): Readonly<Pick<UserAccount, 'id' | 'email' | 'profile'>> | undefined {
    const account = this.Register.get(id);
    if(!account) {
      console.error("User not found");
      return undefined;
    }

    const ret = {
      id: account.id,
      email: account.email,
      profile: { ...account.profile},
    };

    return Object.freeze(ret);
  }
}
