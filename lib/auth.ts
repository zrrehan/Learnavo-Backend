import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "postgresql", ...etc
    }),
    trustedOrigins: [process.env.MY_FRONTEND_URL as string],
    user: {
        additionalFields: {
            roles: {
                type: ["admin", "tutor", "student"], 
            }
        }
    }, 
    emailAndPassword: { 
        enabled: true, 
    }, 
});