
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model mensagem
 * 
 */
export type mensagem = $Result.DefaultSelection<Prisma.$mensagemPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Mensagems
 * const mensagems = await prisma.mensagem.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Mensagems
   * const mensagems = await prisma.mensagem.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.mensagem`: Exposes CRUD operations for the **mensagem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mensagems
    * const mensagems = await prisma.mensagem.findMany()
    * ```
    */
  get mensagem(): Prisma.mensagemDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    mensagem: 'mensagem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "mensagem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      mensagem: {
        payload: Prisma.$mensagemPayload<ExtArgs>
        fields: Prisma.mensagemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mensagemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensagemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mensagemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensagemPayload>
          }
          findFirst: {
            args: Prisma.mensagemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensagemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mensagemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensagemPayload>
          }
          findMany: {
            args: Prisma.mensagemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensagemPayload>[]
          }
          create: {
            args: Prisma.mensagemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensagemPayload>
          }
          createMany: {
            args: Prisma.mensagemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.mensagemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensagemPayload>
          }
          update: {
            args: Prisma.mensagemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensagemPayload>
          }
          deleteMany: {
            args: Prisma.mensagemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mensagemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.mensagemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensagemPayload>
          }
          aggregate: {
            args: Prisma.MensagemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMensagem>
          }
          groupBy: {
            args: Prisma.mensagemGroupByArgs<ExtArgs>
            result: $Utils.Optional<MensagemGroupByOutputType>[]
          }
          count: {
            args: Prisma.mensagemCountArgs<ExtArgs>
            result: $Utils.Optional<MensagemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    mensagem?: mensagemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model mensagem
   */

  export type AggregateMensagem = {
    _count: MensagemCountAggregateOutputType | null
    _avg: MensagemAvgAggregateOutputType | null
    _sum: MensagemSumAggregateOutputType | null
    _min: MensagemMinAggregateOutputType | null
    _max: MensagemMaxAggregateOutputType | null
  }

  export type MensagemAvgAggregateOutputType = {
    id: number | null
  }

  export type MensagemSumAggregateOutputType = {
    id: number | null
  }

  export type MensagemMinAggregateOutputType = {
    id: number | null
    data_visualizacao: Date | null
    nome_carta: string | null
    id_ws: string | null
  }

  export type MensagemMaxAggregateOutputType = {
    id: number | null
    data_visualizacao: Date | null
    nome_carta: string | null
    id_ws: string | null
  }

  export type MensagemCountAggregateOutputType = {
    id: number
    data_visualizacao: number
    nome_carta: number
    id_ws: number
    _all: number
  }


  export type MensagemAvgAggregateInputType = {
    id?: true
  }

  export type MensagemSumAggregateInputType = {
    id?: true
  }

  export type MensagemMinAggregateInputType = {
    id?: true
    data_visualizacao?: true
    nome_carta?: true
    id_ws?: true
  }

  export type MensagemMaxAggregateInputType = {
    id?: true
    data_visualizacao?: true
    nome_carta?: true
    id_ws?: true
  }

  export type MensagemCountAggregateInputType = {
    id?: true
    data_visualizacao?: true
    nome_carta?: true
    id_ws?: true
    _all?: true
  }

  export type MensagemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mensagem to aggregate.
     */
    where?: mensagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mensagems to fetch.
     */
    orderBy?: mensagemOrderByWithRelationInput | mensagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mensagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mensagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mensagems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mensagems
    **/
    _count?: true | MensagemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MensagemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MensagemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MensagemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MensagemMaxAggregateInputType
  }

  export type GetMensagemAggregateType<T extends MensagemAggregateArgs> = {
        [P in keyof T & keyof AggregateMensagem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMensagem[P]>
      : GetScalarType<T[P], AggregateMensagem[P]>
  }




  export type mensagemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mensagemWhereInput
    orderBy?: mensagemOrderByWithAggregationInput | mensagemOrderByWithAggregationInput[]
    by: MensagemScalarFieldEnum[] | MensagemScalarFieldEnum
    having?: mensagemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MensagemCountAggregateInputType | true
    _avg?: MensagemAvgAggregateInputType
    _sum?: MensagemSumAggregateInputType
    _min?: MensagemMinAggregateInputType
    _max?: MensagemMaxAggregateInputType
  }

  export type MensagemGroupByOutputType = {
    id: number
    data_visualizacao: Date
    nome_carta: string
    id_ws: string | null
    _count: MensagemCountAggregateOutputType | null
    _avg: MensagemAvgAggregateOutputType | null
    _sum: MensagemSumAggregateOutputType | null
    _min: MensagemMinAggregateOutputType | null
    _max: MensagemMaxAggregateOutputType | null
  }

  type GetMensagemGroupByPayload<T extends mensagemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MensagemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MensagemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MensagemGroupByOutputType[P]>
            : GetScalarType<T[P], MensagemGroupByOutputType[P]>
        }
      >
    >


  export type mensagemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data_visualizacao?: boolean
    nome_carta?: boolean
    id_ws?: boolean
  }, ExtArgs["result"]["mensagem"]>



  export type mensagemSelectScalar = {
    id?: boolean
    data_visualizacao?: boolean
    nome_carta?: boolean
    id_ws?: boolean
  }

  export type mensagemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "data_visualizacao" | "nome_carta" | "id_ws", ExtArgs["result"]["mensagem"]>

  export type $mensagemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mensagem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      data_visualizacao: Date
      nome_carta: string
      id_ws: string | null
    }, ExtArgs["result"]["mensagem"]>
    composites: {}
  }

  type mensagemGetPayload<S extends boolean | null | undefined | mensagemDefaultArgs> = $Result.GetResult<Prisma.$mensagemPayload, S>

  type mensagemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mensagemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MensagemCountAggregateInputType | true
    }

  export interface mensagemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mensagem'], meta: { name: 'mensagem' } }
    /**
     * Find zero or one Mensagem that matches the filter.
     * @param {mensagemFindUniqueArgs} args - Arguments to find a Mensagem
     * @example
     * // Get one Mensagem
     * const mensagem = await prisma.mensagem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mensagemFindUniqueArgs>(args: SelectSubset<T, mensagemFindUniqueArgs<ExtArgs>>): Prisma__mensagemClient<$Result.GetResult<Prisma.$mensagemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mensagem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mensagemFindUniqueOrThrowArgs} args - Arguments to find a Mensagem
     * @example
     * // Get one Mensagem
     * const mensagem = await prisma.mensagem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mensagemFindUniqueOrThrowArgs>(args: SelectSubset<T, mensagemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mensagemClient<$Result.GetResult<Prisma.$mensagemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mensagem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mensagemFindFirstArgs} args - Arguments to find a Mensagem
     * @example
     * // Get one Mensagem
     * const mensagem = await prisma.mensagem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mensagemFindFirstArgs>(args?: SelectSubset<T, mensagemFindFirstArgs<ExtArgs>>): Prisma__mensagemClient<$Result.GetResult<Prisma.$mensagemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mensagem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mensagemFindFirstOrThrowArgs} args - Arguments to find a Mensagem
     * @example
     * // Get one Mensagem
     * const mensagem = await prisma.mensagem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mensagemFindFirstOrThrowArgs>(args?: SelectSubset<T, mensagemFindFirstOrThrowArgs<ExtArgs>>): Prisma__mensagemClient<$Result.GetResult<Prisma.$mensagemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mensagems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mensagemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mensagems
     * const mensagems = await prisma.mensagem.findMany()
     * 
     * // Get first 10 Mensagems
     * const mensagems = await prisma.mensagem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mensagemWithIdOnly = await prisma.mensagem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends mensagemFindManyArgs>(args?: SelectSubset<T, mensagemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mensagemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mensagem.
     * @param {mensagemCreateArgs} args - Arguments to create a Mensagem.
     * @example
     * // Create one Mensagem
     * const Mensagem = await prisma.mensagem.create({
     *   data: {
     *     // ... data to create a Mensagem
     *   }
     * })
     * 
     */
    create<T extends mensagemCreateArgs>(args: SelectSubset<T, mensagemCreateArgs<ExtArgs>>): Prisma__mensagemClient<$Result.GetResult<Prisma.$mensagemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mensagems.
     * @param {mensagemCreateManyArgs} args - Arguments to create many Mensagems.
     * @example
     * // Create many Mensagems
     * const mensagem = await prisma.mensagem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mensagemCreateManyArgs>(args?: SelectSubset<T, mensagemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mensagem.
     * @param {mensagemDeleteArgs} args - Arguments to delete one Mensagem.
     * @example
     * // Delete one Mensagem
     * const Mensagem = await prisma.mensagem.delete({
     *   where: {
     *     // ... filter to delete one Mensagem
     *   }
     * })
     * 
     */
    delete<T extends mensagemDeleteArgs>(args: SelectSubset<T, mensagemDeleteArgs<ExtArgs>>): Prisma__mensagemClient<$Result.GetResult<Prisma.$mensagemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mensagem.
     * @param {mensagemUpdateArgs} args - Arguments to update one Mensagem.
     * @example
     * // Update one Mensagem
     * const mensagem = await prisma.mensagem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mensagemUpdateArgs>(args: SelectSubset<T, mensagemUpdateArgs<ExtArgs>>): Prisma__mensagemClient<$Result.GetResult<Prisma.$mensagemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mensagems.
     * @param {mensagemDeleteManyArgs} args - Arguments to filter Mensagems to delete.
     * @example
     * // Delete a few Mensagems
     * const { count } = await prisma.mensagem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mensagemDeleteManyArgs>(args?: SelectSubset<T, mensagemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mensagems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mensagemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mensagems
     * const mensagem = await prisma.mensagem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mensagemUpdateManyArgs>(args: SelectSubset<T, mensagemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mensagem.
     * @param {mensagemUpsertArgs} args - Arguments to update or create a Mensagem.
     * @example
     * // Update or create a Mensagem
     * const mensagem = await prisma.mensagem.upsert({
     *   create: {
     *     // ... data to create a Mensagem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mensagem we want to update
     *   }
     * })
     */
    upsert<T extends mensagemUpsertArgs>(args: SelectSubset<T, mensagemUpsertArgs<ExtArgs>>): Prisma__mensagemClient<$Result.GetResult<Prisma.$mensagemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mensagems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mensagemCountArgs} args - Arguments to filter Mensagems to count.
     * @example
     * // Count the number of Mensagems
     * const count = await prisma.mensagem.count({
     *   where: {
     *     // ... the filter for the Mensagems we want to count
     *   }
     * })
    **/
    count<T extends mensagemCountArgs>(
      args?: Subset<T, mensagemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MensagemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mensagem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MensagemAggregateArgs>(args: Subset<T, MensagemAggregateArgs>): Prisma.PrismaPromise<GetMensagemAggregateType<T>>

    /**
     * Group by Mensagem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mensagemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends mensagemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mensagemGroupByArgs['orderBy'] }
        : { orderBy?: mensagemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, mensagemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMensagemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mensagem model
   */
  readonly fields: mensagemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mensagem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mensagemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the mensagem model
   */
  interface mensagemFieldRefs {
    readonly id: FieldRef<"mensagem", 'Int'>
    readonly data_visualizacao: FieldRef<"mensagem", 'DateTime'>
    readonly nome_carta: FieldRef<"mensagem", 'String'>
    readonly id_ws: FieldRef<"mensagem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * mensagem findUnique
   */
  export type mensagemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensagem
     */
    select?: mensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mensagem
     */
    omit?: mensagemOmit<ExtArgs> | null
    /**
     * Filter, which mensagem to fetch.
     */
    where: mensagemWhereUniqueInput
  }

  /**
   * mensagem findUniqueOrThrow
   */
  export type mensagemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensagem
     */
    select?: mensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mensagem
     */
    omit?: mensagemOmit<ExtArgs> | null
    /**
     * Filter, which mensagem to fetch.
     */
    where: mensagemWhereUniqueInput
  }

  /**
   * mensagem findFirst
   */
  export type mensagemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensagem
     */
    select?: mensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mensagem
     */
    omit?: mensagemOmit<ExtArgs> | null
    /**
     * Filter, which mensagem to fetch.
     */
    where?: mensagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mensagems to fetch.
     */
    orderBy?: mensagemOrderByWithRelationInput | mensagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mensagems.
     */
    cursor?: mensagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mensagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mensagems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mensagems.
     */
    distinct?: MensagemScalarFieldEnum | MensagemScalarFieldEnum[]
  }

  /**
   * mensagem findFirstOrThrow
   */
  export type mensagemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensagem
     */
    select?: mensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mensagem
     */
    omit?: mensagemOmit<ExtArgs> | null
    /**
     * Filter, which mensagem to fetch.
     */
    where?: mensagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mensagems to fetch.
     */
    orderBy?: mensagemOrderByWithRelationInput | mensagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mensagems.
     */
    cursor?: mensagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mensagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mensagems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mensagems.
     */
    distinct?: MensagemScalarFieldEnum | MensagemScalarFieldEnum[]
  }

  /**
   * mensagem findMany
   */
  export type mensagemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensagem
     */
    select?: mensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mensagem
     */
    omit?: mensagemOmit<ExtArgs> | null
    /**
     * Filter, which mensagems to fetch.
     */
    where?: mensagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mensagems to fetch.
     */
    orderBy?: mensagemOrderByWithRelationInput | mensagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mensagems.
     */
    cursor?: mensagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mensagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mensagems.
     */
    skip?: number
    distinct?: MensagemScalarFieldEnum | MensagemScalarFieldEnum[]
  }

  /**
   * mensagem create
   */
  export type mensagemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensagem
     */
    select?: mensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mensagem
     */
    omit?: mensagemOmit<ExtArgs> | null
    /**
     * The data needed to create a mensagem.
     */
    data: XOR<mensagemCreateInput, mensagemUncheckedCreateInput>
  }

  /**
   * mensagem createMany
   */
  export type mensagemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mensagems.
     */
    data: mensagemCreateManyInput | mensagemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mensagem update
   */
  export type mensagemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensagem
     */
    select?: mensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mensagem
     */
    omit?: mensagemOmit<ExtArgs> | null
    /**
     * The data needed to update a mensagem.
     */
    data: XOR<mensagemUpdateInput, mensagemUncheckedUpdateInput>
    /**
     * Choose, which mensagem to update.
     */
    where: mensagemWhereUniqueInput
  }

  /**
   * mensagem updateMany
   */
  export type mensagemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mensagems.
     */
    data: XOR<mensagemUpdateManyMutationInput, mensagemUncheckedUpdateManyInput>
    /**
     * Filter which mensagems to update
     */
    where?: mensagemWhereInput
    /**
     * Limit how many mensagems to update.
     */
    limit?: number
  }

  /**
   * mensagem upsert
   */
  export type mensagemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensagem
     */
    select?: mensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mensagem
     */
    omit?: mensagemOmit<ExtArgs> | null
    /**
     * The filter to search for the mensagem to update in case it exists.
     */
    where: mensagemWhereUniqueInput
    /**
     * In case the mensagem found by the `where` argument doesn't exist, create a new mensagem with this data.
     */
    create: XOR<mensagemCreateInput, mensagemUncheckedCreateInput>
    /**
     * In case the mensagem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mensagemUpdateInput, mensagemUncheckedUpdateInput>
  }

  /**
   * mensagem delete
   */
  export type mensagemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensagem
     */
    select?: mensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mensagem
     */
    omit?: mensagemOmit<ExtArgs> | null
    /**
     * Filter which mensagem to delete.
     */
    where: mensagemWhereUniqueInput
  }

  /**
   * mensagem deleteMany
   */
  export type mensagemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mensagems to delete
     */
    where?: mensagemWhereInput
    /**
     * Limit how many mensagems to delete.
     */
    limit?: number
  }

  /**
   * mensagem without action
   */
  export type mensagemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensagem
     */
    select?: mensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mensagem
     */
    omit?: mensagemOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MensagemScalarFieldEnum: {
    id: 'id',
    data_visualizacao: 'data_visualizacao',
    nome_carta: 'nome_carta',
    id_ws: 'id_ws'
  };

  export type MensagemScalarFieldEnum = (typeof MensagemScalarFieldEnum)[keyof typeof MensagemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const mensagemOrderByRelevanceFieldEnum: {
    nome_carta: 'nome_carta',
    id_ws: 'id_ws'
  };

  export type mensagemOrderByRelevanceFieldEnum = (typeof mensagemOrderByRelevanceFieldEnum)[keyof typeof mensagemOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type mensagemWhereInput = {
    AND?: mensagemWhereInput | mensagemWhereInput[]
    OR?: mensagemWhereInput[]
    NOT?: mensagemWhereInput | mensagemWhereInput[]
    id?: IntFilter<"mensagem"> | number
    data_visualizacao?: DateTimeFilter<"mensagem"> | Date | string
    nome_carta?: StringFilter<"mensagem"> | string
    id_ws?: StringNullableFilter<"mensagem"> | string | null
  }

  export type mensagemOrderByWithRelationInput = {
    id?: SortOrder
    data_visualizacao?: SortOrder
    nome_carta?: SortOrder
    id_ws?: SortOrderInput | SortOrder
    _relevance?: mensagemOrderByRelevanceInput
  }

  export type mensagemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: mensagemWhereInput | mensagemWhereInput[]
    OR?: mensagemWhereInput[]
    NOT?: mensagemWhereInput | mensagemWhereInput[]
    data_visualizacao?: DateTimeFilter<"mensagem"> | Date | string
    nome_carta?: StringFilter<"mensagem"> | string
    id_ws?: StringNullableFilter<"mensagem"> | string | null
  }, "id">

  export type mensagemOrderByWithAggregationInput = {
    id?: SortOrder
    data_visualizacao?: SortOrder
    nome_carta?: SortOrder
    id_ws?: SortOrderInput | SortOrder
    _count?: mensagemCountOrderByAggregateInput
    _avg?: mensagemAvgOrderByAggregateInput
    _max?: mensagemMaxOrderByAggregateInput
    _min?: mensagemMinOrderByAggregateInput
    _sum?: mensagemSumOrderByAggregateInput
  }

  export type mensagemScalarWhereWithAggregatesInput = {
    AND?: mensagemScalarWhereWithAggregatesInput | mensagemScalarWhereWithAggregatesInput[]
    OR?: mensagemScalarWhereWithAggregatesInput[]
    NOT?: mensagemScalarWhereWithAggregatesInput | mensagemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"mensagem"> | number
    data_visualizacao?: DateTimeWithAggregatesFilter<"mensagem"> | Date | string
    nome_carta?: StringWithAggregatesFilter<"mensagem"> | string
    id_ws?: StringNullableWithAggregatesFilter<"mensagem"> | string | null
  }

  export type mensagemCreateInput = {
    data_visualizacao?: Date | string
    nome_carta: string
    id_ws?: string | null
  }

  export type mensagemUncheckedCreateInput = {
    id?: number
    data_visualizacao?: Date | string
    nome_carta: string
    id_ws?: string | null
  }

  export type mensagemUpdateInput = {
    data_visualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    nome_carta?: StringFieldUpdateOperationsInput | string
    id_ws?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mensagemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    data_visualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    nome_carta?: StringFieldUpdateOperationsInput | string
    id_ws?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mensagemCreateManyInput = {
    id?: number
    data_visualizacao?: Date | string
    nome_carta: string
    id_ws?: string | null
  }

  export type mensagemUpdateManyMutationInput = {
    data_visualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    nome_carta?: StringFieldUpdateOperationsInput | string
    id_ws?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mensagemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    data_visualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    nome_carta?: StringFieldUpdateOperationsInput | string
    id_ws?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type mensagemOrderByRelevanceInput = {
    fields: mensagemOrderByRelevanceFieldEnum | mensagemOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type mensagemCountOrderByAggregateInput = {
    id?: SortOrder
    data_visualizacao?: SortOrder
    nome_carta?: SortOrder
    id_ws?: SortOrder
  }

  export type mensagemAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type mensagemMaxOrderByAggregateInput = {
    id?: SortOrder
    data_visualizacao?: SortOrder
    nome_carta?: SortOrder
    id_ws?: SortOrder
  }

  export type mensagemMinOrderByAggregateInput = {
    id?: SortOrder
    data_visualizacao?: SortOrder
    nome_carta?: SortOrder
    id_ws?: SortOrder
  }

  export type mensagemSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}