import { RambdaTypes, type } from 'rambda'
import lCompact from 'lodash.compact'

type Falsey = false | null | undefined | 0 | ''
/**
 * @returns Array **without** falsey values (`false`, `0`, `""`, `null`, `undefined`, and `NaN`)
 */
export const compact = <T>(array: (T | Falsey)[]): Exclude<T, Falsey> => lCompact(array)

/** String if. Previously named as strIf */
export const templateIf = (condition: any, string: string) => (condition ? string : '')

/** @throws if not expected */
export const ensureType = (expectedType: RambdaTypes, name?: string) => {
    const actualType = type(expectedType)
    if (actualType === expectedType) return
    throw new Error(`Expected type ${expectedType}${templateIf(name, ` from ${name}`)}. Got ${actualType}`)
}

export { omitObj, pickObj } from './pickOmit'
