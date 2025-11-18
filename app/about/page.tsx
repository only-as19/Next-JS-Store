import db from "@/utils/db"
const AboutPage = async () => {

  const profile = await db.testProfile.create({
    data:{
      name: "Asad"
    }
  })

  const users = await db.testProfile.findMany()
  console.log(users)
  return (
    <div>
      
    </div>
  )
}

export default AboutPage
