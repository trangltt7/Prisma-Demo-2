// Code generated by Prisma (prisma@1.23.1). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  project: (where?: ProjectWhereInput) => Promise<boolean>;
  task: (where?: TaskWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  project: (where: ProjectWhereUniqueInput) => ProjectPromise;
  projects: (
    args?: {
      where?: ProjectWhereInput;
      orderBy?: ProjectOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Project>;
  projectsConnection: (
    args?: {
      where?: ProjectWhereInput;
      orderBy?: ProjectOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => ProjectConnectionPromise;
  task: (where: TaskWhereUniqueInput) => TaskPromise;
  tasks: (
    args?: {
      where?: TaskWhereInput;
      orderBy?: TaskOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Task>;
  tasksConnection: (
    args?: {
      where?: TaskWhereInput;
      orderBy?: TaskOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => TaskConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createProject: (data: ProjectCreateInput) => ProjectPromise;
  updateProject: (
    args: { data: ProjectUpdateInput; where: ProjectWhereUniqueInput }
  ) => ProjectPromise;
  updateManyProjects: (
    args: { data: ProjectUpdateManyMutationInput; where?: ProjectWhereInput }
  ) => BatchPayloadPromise;
  upsertProject: (
    args: {
      where: ProjectWhereUniqueInput;
      create: ProjectCreateInput;
      update: ProjectUpdateInput;
    }
  ) => ProjectPromise;
  deleteProject: (where: ProjectWhereUniqueInput) => ProjectPromise;
  deleteManyProjects: (where?: ProjectWhereInput) => BatchPayloadPromise;
  createTask: (data: TaskCreateInput) => TaskPromise;
  updateTask: (
    args: { data: TaskUpdateInput; where: TaskWhereUniqueInput }
  ) => TaskPromise;
  updateManyTasks: (
    args: { data: TaskUpdateManyMutationInput; where?: TaskWhereInput }
  ) => BatchPayloadPromise;
  upsertTask: (
    args: {
      where: TaskWhereUniqueInput;
      create: TaskCreateInput;
      update: TaskUpdateInput;
    }
  ) => TaskPromise;
  deleteTask: (where: TaskWhereUniqueInput) => TaskPromise;
  deleteManyTasks: (where?: TaskWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  project: (
    where?: ProjectSubscriptionWhereInput
  ) => ProjectSubscriptionPayloadSubscription;
  task: (
    where?: TaskSubscriptionWhereInput
  ) => TaskSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type TaskOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "isCompleted_ASC"
  | "isCompleted_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type ProjectOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface TaskUpdateManyWithoutProjectInput {
  create?: TaskCreateWithoutProjectInput[] | TaskCreateWithoutProjectInput;
  delete?: TaskWhereUniqueInput[] | TaskWhereUniqueInput;
  connect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput;
  disconnect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput;
  update?:
    | TaskUpdateWithWhereUniqueWithoutProjectInput[]
    | TaskUpdateWithWhereUniqueWithoutProjectInput;
  upsert?:
    | TaskUpsertWithWhereUniqueWithoutProjectInput[]
    | TaskUpsertWithWhereUniqueWithoutProjectInput;
  deleteMany?: TaskScalarWhereInput[] | TaskScalarWhereInput;
  updateMany?:
    | TaskUpdateManyWithWhereNestedInput[]
    | TaskUpdateManyWithWhereNestedInput;
}

export type ProjectWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface TaskUpsertWithWhereUniqueWithoutProjectInput {
  where: TaskWhereUniqueInput;
  update: TaskUpdateWithoutProjectDataInput;
  create: TaskCreateWithoutProjectInput;
}

export interface ProjectWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  tasks_every?: TaskWhereInput;
  tasks_some?: TaskWhereInput;
  tasks_none?: TaskWhereInput;
  AND?: ProjectWhereInput[] | ProjectWhereInput;
  OR?: ProjectWhereInput[] | ProjectWhereInput;
  NOT?: ProjectWhereInput[] | ProjectWhereInput;
}

export interface TaskScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  title?: String;
  title_not?: String;
  title_in?: String[] | String;
  title_not_in?: String[] | String;
  title_lt?: String;
  title_lte?: String;
  title_gt?: String;
  title_gte?: String;
  title_contains?: String;
  title_not_contains?: String;
  title_starts_with?: String;
  title_not_starts_with?: String;
  title_ends_with?: String;
  title_not_ends_with?: String;
  isCompleted?: Boolean;
  isCompleted_not?: Boolean;
  AND?: TaskScalarWhereInput[] | TaskScalarWhereInput;
  OR?: TaskScalarWhereInput[] | TaskScalarWhereInput;
  NOT?: TaskScalarWhereInput[] | TaskScalarWhereInput;
}

export interface TaskWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  title?: String;
  title_not?: String;
  title_in?: String[] | String;
  title_not_in?: String[] | String;
  title_lt?: String;
  title_lte?: String;
  title_gt?: String;
  title_gte?: String;
  title_contains?: String;
  title_not_contains?: String;
  title_starts_with?: String;
  title_not_starts_with?: String;
  title_ends_with?: String;
  title_not_ends_with?: String;
  project?: ProjectWhereInput;
  isCompleted?: Boolean;
  isCompleted_not?: Boolean;
  AND?: TaskWhereInput[] | TaskWhereInput;
  OR?: TaskWhereInput[] | TaskWhereInput;
  NOT?: TaskWhereInput[] | TaskWhereInput;
}

export interface ProjectCreateInput {
  name: String;
  tasks?: TaskCreateManyWithoutProjectInput;
}

export interface TaskUpdateManyDataInput {
  title?: String;
  isCompleted?: Boolean;
}

export interface TaskCreateManyWithoutProjectInput {
  create?: TaskCreateWithoutProjectInput[] | TaskCreateWithoutProjectInput;
  connect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput;
}

export interface TaskUpdateManyWithWhereNestedInput {
  where: TaskScalarWhereInput;
  data: TaskUpdateManyDataInput;
}

export interface TaskCreateWithoutProjectInput {
  title: String;
  isCompleted?: Boolean;
}

export interface ProjectSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: ProjectWhereInput;
  AND?: ProjectSubscriptionWhereInput[] | ProjectSubscriptionWhereInput;
  OR?: ProjectSubscriptionWhereInput[] | ProjectSubscriptionWhereInput;
  NOT?: ProjectSubscriptionWhereInput[] | ProjectSubscriptionWhereInput;
}

export interface ProjectUpdateInput {
  name?: String;
  tasks?: TaskUpdateManyWithoutProjectInput;
}

export interface ProjectUpsertWithoutTasksInput {
  update: ProjectUpdateWithoutTasksDataInput;
  create: ProjectCreateWithoutTasksInput;
}

export interface ProjectCreateWithoutTasksInput {
  name: String;
}

export interface ProjectUpdateWithoutTasksDataInput {
  name?: String;
}

export interface TaskUpdateWithWhereUniqueWithoutProjectInput {
  where: TaskWhereUniqueInput;
  data: TaskUpdateWithoutProjectDataInput;
}

export interface TaskUpdateInput {
  title?: String;
  project?: ProjectUpdateOneRequiredWithoutTasksInput;
  isCompleted?: Boolean;
}

export interface TaskSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: TaskWhereInput;
  AND?: TaskSubscriptionWhereInput[] | TaskSubscriptionWhereInput;
  OR?: TaskSubscriptionWhereInput[] | TaskSubscriptionWhereInput;
  NOT?: TaskSubscriptionWhereInput[] | TaskSubscriptionWhereInput;
}

export interface ProjectUpdateManyMutationInput {
  name?: String;
}

export interface TaskCreateInput {
  title: String;
  project: ProjectCreateOneWithoutTasksInput;
  isCompleted?: Boolean;
}

export interface ProjectCreateOneWithoutTasksInput {
  create?: ProjectCreateWithoutTasksInput;
  connect?: ProjectWhereUniqueInput;
}

export interface TaskUpdateWithoutProjectDataInput {
  title?: String;
  isCompleted?: Boolean;
}

export interface TaskUpdateManyMutationInput {
  title?: String;
  isCompleted?: Boolean;
}

export interface ProjectUpdateOneRequiredWithoutTasksInput {
  create?: ProjectCreateWithoutTasksInput;
  update?: ProjectUpdateWithoutTasksDataInput;
  upsert?: ProjectUpsertWithoutTasksInput;
  connect?: ProjectWhereUniqueInput;
}

export type TaskWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface NodeNode {
  id: ID_Output;
}

export interface TaskPreviousValues {
  id: ID_Output;
  title: String;
  isCompleted: Boolean;
}

export interface TaskPreviousValuesPromise
  extends Promise<TaskPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  isCompleted: () => Promise<Boolean>;
}

export interface TaskPreviousValuesSubscription
  extends Promise<AsyncIterator<TaskPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  isCompleted: () => Promise<AsyncIterator<Boolean>>;
}

export interface AggregateProject {
  count: Int;
}

export interface AggregateProjectPromise
  extends Promise<AggregateProject>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateProjectSubscription
  extends Promise<AsyncIterator<AggregateProject>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface Task {
  id: ID_Output;
  title: String;
  isCompleted: Boolean;
}

export interface TaskPromise extends Promise<Task>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  project: <T = ProjectPromise>() => T;
  isCompleted: () => Promise<Boolean>;
}

export interface TaskSubscription
  extends Promise<AsyncIterator<Task>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  project: <T = ProjectSubscription>() => T;
  isCompleted: () => Promise<AsyncIterator<Boolean>>;
}

export interface TaskConnection {
  pageInfo: PageInfo;
  edges: TaskEdge[];
}

export interface TaskConnectionPromise
  extends Promise<TaskConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<TaskEdge>>() => T;
  aggregate: <T = AggregateTaskPromise>() => T;
}

export interface TaskConnectionSubscription
  extends Promise<AsyncIterator<TaskConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<TaskEdgeSubscription>>>() => T;
  aggregate: <T = AggregateTaskSubscription>() => T;
}

export interface ProjectSubscriptionPayload {
  mutation: MutationType;
  node: Project;
  updatedFields: String[];
  previousValues: ProjectPreviousValues;
}

export interface ProjectSubscriptionPayloadPromise
  extends Promise<ProjectSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ProjectPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ProjectPreviousValuesPromise>() => T;
}

export interface ProjectSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ProjectSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ProjectSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ProjectPreviousValuesSubscription>() => T;
}

export interface ProjectEdge {
  node: Project;
  cursor: String;
}

export interface ProjectEdgePromise extends Promise<ProjectEdge>, Fragmentable {
  node: <T = ProjectPromise>() => T;
  cursor: () => Promise<String>;
}

export interface ProjectEdgeSubscription
  extends Promise<AsyncIterator<ProjectEdge>>,
    Fragmentable {
  node: <T = ProjectSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface Project {
  id: ID_Output;
  name: String;
}

export interface ProjectPromise extends Promise<Project>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  tasks: <T = FragmentableArray<Task>>(
    args?: {
      where?: TaskWhereInput;
      orderBy?: TaskOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface ProjectSubscription
  extends Promise<AsyncIterator<Project>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  tasks: <T = Promise<AsyncIterator<TaskSubscription>>>(
    args?: {
      where?: TaskWhereInput;
      orderBy?: TaskOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface ProjectPreviousValues {
  id: ID_Output;
  name: String;
}

export interface ProjectPreviousValuesPromise
  extends Promise<ProjectPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface ProjectPreviousValuesSubscription
  extends Promise<AsyncIterator<ProjectPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface TaskSubscriptionPayload {
  mutation: MutationType;
  node: Task;
  updatedFields: String[];
  previousValues: TaskPreviousValues;
}

export interface TaskSubscriptionPayloadPromise
  extends Promise<TaskSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = TaskPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = TaskPreviousValuesPromise>() => T;
}

export interface TaskSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<TaskSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = TaskSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = TaskPreviousValuesSubscription>() => T;
}

export interface TaskEdge {
  node: Task;
  cursor: String;
}

export interface TaskEdgePromise extends Promise<TaskEdge>, Fragmentable {
  node: <T = TaskPromise>() => T;
  cursor: () => Promise<String>;
}

export interface TaskEdgeSubscription
  extends Promise<AsyncIterator<TaskEdge>>,
    Fragmentable {
  node: <T = TaskSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateTask {
  count: Int;
}

export interface AggregateTaskPromise
  extends Promise<AggregateTask>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateTaskSubscription
  extends Promise<AsyncIterator<AggregateTask>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface ProjectConnection {
  pageInfo: PageInfo;
  edges: ProjectEdge[];
}

export interface ProjectConnectionPromise
  extends Promise<ProjectConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ProjectEdge>>() => T;
  aggregate: <T = AggregateProjectPromise>() => T;
}

export interface ProjectConnectionSubscription
  extends Promise<AsyncIterator<ProjectConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ProjectEdgeSubscription>>>() => T;
  aggregate: <T = AggregateProjectSubscription>() => T;
}

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

export type Long = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Project",
    embedded: false
  },
  {
    name: "Task",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
