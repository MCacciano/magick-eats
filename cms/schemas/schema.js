import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Schemas
// objects
// import food from './objects/food';
// documents
import burger from './documents/burger';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([burger])
});
