export declare type JsonFunction = <Data>(data: Data) => Response
// export declare const json: JsonFunction

export const json: JsonFunction = (data) => {
  return JSON.parse(
    JSON.stringify(
      { ...data },
      (key, value) => (typeof value === "bigint" ? value.toString() : value), // return everything else unchanged
    ),
  )
}
