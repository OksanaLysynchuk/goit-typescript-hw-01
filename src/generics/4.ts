interface UserUpdate {
  name?: string;
  surname?: string;
  email?: string;
  password?: string;
}

function createOrUpdateUser(initialValues: UserUpdate) {
  // Оновлення користувача
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
