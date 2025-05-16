import { type SchemaTypeDefinition } from 'sanity'

import {offerType} from './offerType'
import {blockContentType} from './blockContentType'
import { categoryType } from './categoryType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, offerType, categoryType],
}
