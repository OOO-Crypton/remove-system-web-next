export const getMovieUrl = (slug: string) => `/movie/${slug}`
export const getGenreUrl = (slug: string) => `/genre/${slug}`
export const getActorUrl = (slug: string) => `/actor/${slug}`

export const getAdminUrl = (link: string) => `/manage/${link}`
export const getAdminHomeUrl = () => getAdminUrl('').slice(0, -1)
