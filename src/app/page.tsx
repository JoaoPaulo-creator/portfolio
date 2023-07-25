import { getInfos } from "@/lib/request"

type ResponseProps = {
  name?: string
  avatar_url: string
}


export default async function Home() {

  const response: ResponseProps = await getInfos()


  return (
    <div className="max-w-5xl flex flex-col mx-auto mt-6 mb-6 border border-blue-700">
      <div className="flex flex-row">
        <div className="mx-2 my-4 mr-6">

          {/* Progile image */}
          <img src={response.avatar_url} alt='avatar' height={220} width={180} className="w-48 h-48 rounded-sm mb-4" />
          <strong
            className="text-2xl"
          >
            {response.name} {26}
          </strong>
        </div>

        <div className="my-4">
          <ul>
            <a href="https://www.linkedin.com/in/joao-paulo-935a68139/" target="_blank">
              <button>
                <img src="/linkedin.png" alt="linkedin-icon" />
              </button>
            </a>
          </ul>

          <ul>
            <a href="https://github.com/JoaoPaulo-creator" target="_blank">
              <button className="flex flex-col justify-start mt-2">
                <img src="/github.png" alt="github-icon" />
              </button>
            </a>
          </ul>
        </div>

        <div className="my-4 max-w-screen-sm ml-16">
          <strong className="text-2xl">SOBRE MIM</strong>
          <div className="mt-4 text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis odio quam veritatis rerum optio! Blanditiis esse soluta quia est, temporibus aut tempora vel odio id asperiores voluptatibus quis ratione numquam?
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-2">
        <strong>REPOSITORIOS</strong>
      </div>

      {/* Parte de baixo da tela - Lista de repos */}

      <div className="mt-4 h-screen flex flex-col p-3">
        <ul className="border mt-2 border-white rounded-md">

          <div className="flex flex-row items-center cursor-pointer">
            <div className="mx-2 flex items-center" >
              <img className="w-28 h-14 rounded-full" src="/profile.jpg" alt="repo-image" />
            </div>
            <h1 className="text-gray-800 ml-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea pariatur tenetur aut, doloremque atque fugit odit voluptates veritatis quis libero quidem labore accusantium inventore repudiandae. Atque doloremque voluptates consequuntur repudiandae!</h1>
          </div>

        </ul>

      </div>



    </div>
  )
}
