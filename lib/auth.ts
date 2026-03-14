import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),

    trustedOrigins: ["http://localhost:3000"],

    // ✅ Add CORS configuration
    // cors: {
    //     origin: "http://localhost:3000",
    //     credentials: true,
    // },

    // ✅ Add this block
    advanced: {
        defaultCookieAttributes: {
            sameSite: "lax",
            secure: false,       // set to true in production (HTTPS)
            httpOnly: true,
        },
    },

    user: {
        additionalFields: {
            roles: {
                type: ["admin", "tutor", "student"],
            },
            isBan: {
                type: "boolean",
                defaultValue: false
            }
        }
    },

    emailAndPassword: {
        enabled: true,
    },
});