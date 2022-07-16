// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Performances, Members, PerformancesMembers } = initSchema(schema);

export {
  Performances,
  Members,
  PerformancesMembers
};