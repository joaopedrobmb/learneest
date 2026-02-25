import password from "models/password.js";
import user from "models/user";
import { UnauthorizedError } from "infra/errors";

async function getAuthenticatedUser(providedEmail, providedPassword) {
  const storedUser = await findUserByEmail(providedEmail);

  await validatePassword(providedPassword, storedUser.password);

  return storedUser;

  async function findUserByEmail(providedEmail) {
    let storedUser;

    try {
      storedUser = await user.findOneByEmail(providedEmail);
    } catch (error) {
      throw new UnauthorizedError({
        message: "Incorrect email.",
        action: "Try another email.",
      });
    }

    return storedUser;
  }

  async function validatePassword(providedPassword, storedPassword) {
    const passwordMatch = await password.compare(
      providedPassword,
      storedUser.password,
    );

    if (!passwordMatch) {
      throw new UnauthorizedError({
        message: "Incorrect password.",
        action: "Try another password.",
      });
    }

    return passwordMatch;
  }
}

const authenticator = { getAuthenticatedUser };

export default authenticator;
