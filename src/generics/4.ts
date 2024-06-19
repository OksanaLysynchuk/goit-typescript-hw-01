namespace UserNamespace {
  export type User = {
    name: string;
    surname: string;
    email: string;
    password: string;
  };
}

function createOrUpdateUser(initialValues: Partial<UserNamespace.User>) {
  // Оновлення користувача
  initialValues;
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
