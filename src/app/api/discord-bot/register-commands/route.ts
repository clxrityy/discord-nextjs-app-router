import { CLIENT_APPLICATION_ID, REGISTER_COMMANDS_KEY } from '@/config';
import { discord_api } from '@/utils/discord-api';
import getCommands from '@/utils/getCommands';
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest) {
    try {
        if (!req.query.REGISTER_COMMANDS_KEY)
            throw new Error("Register commands key was invalid!");
        const allCommands = await getCommands();
        const arrayOfSlashCommandsRegister = Object.values(allCommands);
        const arrayOfSlashCommandsRegisterJSON = arrayOfSlashCommandsRegister.map(
            (command) => command.register.toJSON()
        );

        const registerCommands = await discord_api.put(
            `/applications/${CLIENT_APPLICATION_ID}/commands`,
            arrayOfSlashCommandsRegisterJSON
        );

        console.log("== COMMANDS REGISTERED ===");
        console.log(registerCommands.data);
        console.log("== COMMANDS REGISTERED ===");

        return NextResponse.json({ error: null });
    } catch (error) {
        console.log(error);

        return NextResponse.json({
            error: "Error occured"
        });
    }
}