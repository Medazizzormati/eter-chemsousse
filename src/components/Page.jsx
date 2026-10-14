import { useEffect } from 'react'
export default function Page({ title, children }) {
  useEffect(() => {
    document.title = title ? `${title} | Eter Chemsousse Parfum, Khzema, Sousse` : 'Eter Chemsousse Parfum | Parfumerie à Khzema, Sousse'
  }, [title])
  return <div className="page">{children}</div>
}
