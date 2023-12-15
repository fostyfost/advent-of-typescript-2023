type AnyList = Readonly<unknown[]>

export type SantasList<BadList extends AnyList, GoodList extends AnyList> = [...BadList, ...GoodList]
