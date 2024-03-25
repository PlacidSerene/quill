import { auth, currentUser } from "@clerk/nextjs";
import { publicProcedure, router } from "./trpc";
import { TRPCError } from "@trpc/server";
import { db } from "@/db";
export const appRouter = router({
  // ...
  hello: publicProcedure.query(async () => {
    return "hello from trpc";
  }),
  authCallback: publicProcedure.query(async () => {
    const { userId } = auth();

    if (!userId) throw new TRPCError({ code: "UNAUTHORIZED" });

    // check if user is in the db
    const user = await currentUser();
    const email = user?.emailAddresses[0].emailAddress;
    if (!email) throw new TRPCError({ code: "UNAUTHORIZED" });

    const dbUser = await db.user.findFirst({
      where: {
        id: userId,
      },
    });

    if (!dbUser) {
      // create user in db

      await db.user.create({
        data: {
          id: userId,
          email: email,
        },
      });
      console.log("user created");
    }

    return { success: true };
  }),
});
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
