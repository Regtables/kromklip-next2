import { LINKS } from './contants'

export const renderPageIcon = (page) => {
  const link = LINKS.find((link) => link.slug === page)

  return (
    <p>{link.icon}</p>
  )
}
