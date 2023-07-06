export async function Repo() {
  const response = await fetch(
    'https://api.github.com/users/JonatasMSantos/repos',
    {
      // force-cache: 'cacheia' a resposta para todos os usuários
      // no-store: não armazenar em cache de forma global para todos usuários (chamadas diferentes SSR)
      cache: 'no-store',
    },
  )

  const repos = await response.json()

  return (
    <>
      <div className="text-white">Repos: </div>
      <pre className="text-white">{JSON.stringify(repos, null, 2)}</pre>
    </>
  )
}
