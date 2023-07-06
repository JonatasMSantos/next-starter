import { Repo } from './Repo'

// export const revalidade = 30
export async function User() {
  // const [resp1, resp2] = await Promise.all([fetch(''), fetch('')])

  // SSG
  // const response = await fetch('https://api.github.com/users/JonatasMSantos', {
  //   next: {
  //     revalidate: 30,
  //   },
  // })

  const response = await fetch('https://api.github.com/users/JonatasMSantos', {
    // force-cache: 'cacheia' a resposta para todos os usuários
    // no-store: não armazenar em cache de forma global para todos usuários (chamadas diferentes SSR)
    cache: 'no-store',
  })

  const user = await response.json()

  return (
    <>
      <div className="text-white">Userss: </div>
      <pre className="text-white">{JSON.stringify(user, null, 2)}</pre>
      <p>Carregar Repos aqui: </p>
      <Repo />
    </>
  )
}
