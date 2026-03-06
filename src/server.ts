
import { prisma } from '../lib/prisma';
import { app, port } from './app';


async function main() {
    try {
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    } catch(error) {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    }
}

main()
