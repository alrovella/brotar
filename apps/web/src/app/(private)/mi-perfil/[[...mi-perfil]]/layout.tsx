import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Mi Cuenta | ${process.env.NEXT_PUBLIC_APP_NAME}`,
  description: "Administra los datos de tu cuenta",
};

const UserProfileLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="flex justify-center items-center">{children}</div>;
};

export default UserProfileLayout;
