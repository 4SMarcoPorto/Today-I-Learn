import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()
async function main() {
   
   /* const allUsers = await prisma.user.create({
        data:{
            name:'Marco Porto',
            email:'marcoporto1@marcoporto.com',
            Post:{
                create:[
                    {title:'Post 1'},
                    {title:'Post 2'},
                ]
            }
        }
    })*/

    const allUsers = await prisma.user.findMany({
        include:{
            Post:true,
        }
    })
    console.log(allUsers)
}
main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.disconnect()
  })