import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type PerformancesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MembersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PerformancesMembersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Performances {
  readonly id: string;
  readonly location: string;
  readonly date: string;
  readonly url: string;
  readonly Members?: (PerformancesMembers | null)[] | null;
  readonly eventName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Performances, PerformancesMetaData>);
  static copyOf(source: Performances, mutator: (draft: MutableModel<Performances, PerformancesMetaData>) => MutableModel<Performances, PerformancesMetaData> | void): Performances;
}

export declare class Members {
  readonly id: string;
  readonly netID: string;
  readonly graduationYear?: string | null;
  readonly majorAndMinor?: string | null;
  readonly description?: string | null;
  readonly funFact?: string | null;
  readonly fullName: string;
  readonly instagram?: string | null;
  readonly facebook?: string | null;
  readonly reddit?: string | null;
  readonly discord?: string | null;
  readonly eboardPosition?: string | null;
  readonly yearJoined: number;
  readonly yearLeft?: number | null;
  readonly performancess?: (PerformancesMembers | null)[] | null;
  readonly images?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Members, MembersMetaData>);
  static copyOf(source: Members, mutator: (draft: MutableModel<Members, MembersMetaData>) => MutableModel<Members, MembersMetaData> | void): Members;
}

export declare class PerformancesMembers {
  readonly id: string;
  readonly performances: Performances;
  readonly members: Members;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<PerformancesMembers, PerformancesMembersMetaData>);
  static copyOf(source: PerformancesMembers, mutator: (draft: MutableModel<PerformancesMembers, PerformancesMembersMetaData>) => MutableModel<PerformancesMembers, PerformancesMembersMetaData> | void): PerformancesMembers;
}