### Field mapping Avro to IDK

<!--Note to Jacob > I suspect this is a duplication as a result of splitting a massive branch "com-ingest-kafka" into 4x smaller branches and PRs. I suspect it'll be easier to fix the issues post merge with main so they can be observed side-by-side. But let me know if you think this is a bad idea :) -->

#### Arrays

|  | `avro.Array : avro.String` | `idk.StringArrayField` |
|  | `avro.Array : avro.Bytes` | `idk.StringArrayField` |
|  | `avro.Array : avro.Fixed`  | `idk.StringArrayField` |
|  | `avro.Array : avro.Enum` | `idk.StringArrayField` |
|  | `avro.Array : avro.Long` | `idk.IDArrayField`  |
| quantum | `avro.Array : avro.Long` | `idk.IDArrayField` |

#### Boolean data types

| Properties | Avro | IDK |
|---|---|---|
|  | `avro.Boolean` | `idk.BoolField`  |
| mutex=(bool) | `avro.Bytes` | `idk.StringField{Mutex}` |
| mutex=(bool) | `avro.String` | `idk.StringField{Mutex}` |
| fieldType=signedIntBoolKey | `avro.Int`<br/>`avro.Long` | `idk.SignedIntBoolKeyField` |
| fieldType=signedIntBoolKey | `avro.Long` | `idk.SignedIntBoolKeyField` |


#### Decimal data type

| Properties | Avro | IDK |
|---|---|---|
| logicalType=decimal | `avro.Bytes` | `idk.DecimalField`<br/>`idk.DecimalField{Scale}` |
| fieldType=decimal | `avro.Bytes` | `idk.DecimalField`<br/>`idk.DecimalField{Scale}` |
| fieldType=decimal, scale, precision=18 | `avro.Bytes` | `idk.DecimalField` |
| `scale=(uint)` | `avro.Float`<br/>`avro.Double` |  `idk.DecimalField{Scale}` |

#### ID data type

| Properties | Avro | IDK |
|---|---|---|
| fieldType=id | `avro.Int`<br/> `avro.Long` | `idk.IDField` |
| fieldType=id,mutex=(bool) | `avro.Int`<br/>`avro.Long` |  `idk.IDField{Mutex}` |
| fieldType=id, quantum=(YMD) | `avro.Int`<br/>`avro.Long` |  `idk.IDField{Quantum}` |
| fieldType=id, mutex, quantum | `avro.Long` | `idk.IDField` |

#### Int data type

| Properties | Avro | IDK |
|---|---|---|
| fieldType=int | `avro.Int`</br>`avro.Long` | `idk.IntField` |
| fieldType=int,min=(int64), max=(int64) | `avro.Int`<br/>`avro.Long` |  `idk.IntField{Min, Max}` |
| fieldType=int, min, max | `avro.Long` | `idk.IntField` |

#### Mutex data type

| Properties | Avro | IDK |
|---|---|---|
| mutex, quantum | `avro.String` | `idk.StringField` |

#### Quantum constraint

| Properties | Avro | IDK |
|---|---|---|
| quantum | `avro.String` | `idk.StringArrayField` |
| quantum=(YMD) | `avro.String` | `idk.StringField{Quantum}` |
| quantum=(YMD) | `Avro.Bytes` | `idk.StringField{Quantum}` |
| quantum=(YMD) | `avro.Array : avro.String` | `idk.StringArrayField{Quantum)` |
| quantum=(YMD) | `avro.Array : avro.Bytes` | `idk.StringArrayField{Quantum)` |
| quantum=(YMD) | `avro.Array : avro.Fixed` | `idk.StringArrayField{Quantum)` |
| quantum=(YMD) | `avro.Array : avro.Enum` |  `idk.StringArrayField{Quantum)` |
| quantum=(YMD) | `avro.Array : avro.Long`  | `idk.IDArrayField{Quantum}` |

#### Scale data type

| Properties | Avro | IDK |
|---|---|---|
| `scale=(uint)` | `avro.Float`<br/>`avro.Double` |  `idk.DecimalField{Scale}` |

#### String data type

| Properties | Avro | IDK |
|---|---|---|
|  | `avro.String` | `idk.StringField` |
|  | `avro.Bytes` | `idk.StringField` |
|  | `avro.Enum` | `idk.StringField{Mutex: true}` |

#### Timestamp Time Date data types

| Properties | Avro | IDK |
|---|---|---|
| fieldType=dateInt, epoch, unit, customUnit, layout | `avro.Bytes` | `idk.DateIntField{Layout, Epoch, Unit, CustomUnit}` |
| fieldType=recordTime | `avro.Bytes` | `idk.RecordTimeField` |
| fieldType=recordTime, layout | `avro.Bytes` | `idk.RecordTimeField` |

#### Not supported

| Properties | Avro | IDK |
|---|---|---|
|  | `avro.Null` | NOT SUPPORTED  |
|  | `avro.Map` | NOT SUPPORTED  |
|  | `avro.Recursive` | NOT SUPPORTED  |

#### Error

| Properties | Avro | IDK |
|---|---|---|
|  | `avro.Record `| ERROR |

#### UNION
| Properties | Avro | IDK |
|---|---|---|
|  | `avro.Union` | supports one or two members (if two, one must be avro.NULL) |
