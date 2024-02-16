import { GlobalThemeType } from '@/types';
import React from 'react';

export enum ArcResultDisplay {
  VIEW = 'VIEW',
  EDIT = 'EDIT',
  DELETE = 'DELETE',
}

export enum ArcSearchHeaderType {
  MAIN = 'MAIN',
  SUB = 'SUB'
}

export type ArcResultPackage = {
  id: number,
  timeStamp: string,
  data: string,
  tags: string[],
  dataType: string,
  title: string,
  description: string,
  image: string
}

export type ArcResultEditingPackage = {
  itemPackage: ArcEditPackage,
  editingMessage: string
}

export type ArcEditPackage = {
  data: string,
  dataUpdate: string,
  tags: string[],
  title: string,
  description: string,
  image: string
}

export type ArcResultProps = {
  arcResultPackage: ArcResultPackage,
  navigate: string
}

export type ArcResultViewProps = {
  _ref: React.Ref<any>,
  arcResultPackage: ArcResultPackage,
  onDelete: CallableFunction,
  onEdit: CallableFunction,
  navigate: string
  displayMessage: string
}

export type ArcResultDeleteProps = {
  _ref: React.Ref<any>,
  itemKey: string,
  onReset: CallableFunction
}

export type ArcResultEditProps = {
  itemKey: string,
  image: string,
  tags: string,
  title: string,
  description: string,
  onReset: CallableFunction,
  onEditConfirmed: CallableFunction
}

export type ArcResultEditViewProps = {
  itemKey: string,
  image: string,
  tags: string,
  title: string,
  description: string,
  onReset: CallableFunction,
  onEdit: CallableFunction
}

export type ArcResultDeleteQuestionProps = {
  itemKey: string,
  onConfirm: CallableFunction,
  onDeny: CallableFunction,
}

export type ArcResultDeleteConfirmProps = {
  _ref: React.Ref<any>,
  itemKey: string
}

export type ArcResultSubNodeProps = {
  node: ArcSearchResultsNode,
  navigate: string
}

export type TagGroupProps = {
  highlight ?: boolean,
  title: string,
  tagList: string[],
  navigate: string
}

export interface TagGroupSectionProps extends GlobalThemeType {
  isHighLight ?: boolean
}

export type ArcSearchResultsNode = {
  subject: string,
  notes: string[],
  urls: ArcResultPackage[]
}

export type ArcSearchResultPackage = {
  subject: string,
  mainNode: ArcSearchResultsNode,
  subNode: ArcSearchResultsNode[]
}

export type ArcSearchResults = {
  similarTags: string[],
  searchResults: ArcSearchResultPackage
}

export type ArcDeleteItemResults = {
  deletedItem: boolean,
  reason: string,
  data: string[]
}

export type ArcEditItemResults = {
  updatedItem: boolean,
  reason: string,
  data: string[]
}

export type ArcAddItemResults = {
  addedItem: boolean,
  reason: string,
  data: string[]
}

export type ArcResultEditConfirmProps = {
  itemEditPackage: ArcEditPackage,
  onEditConfirmed: CallableFunction
}

export type ArcSearchPageInnerLinksProps = {
  tags: string [],
  updateTagPerspective: CallableFunction
}

export type TagDirectoryNodeProps = {
  tag: string,
  isActive: boolean,
  selectedCallback: CallableFunction
}

export type ArcSearchResultMainNodeProps = {
  subject: string,
  mainNode: ArcSearchResultsNode,
  mainNodeTags: string[],
  tagCache: string [],
  navLocation: string
}

export type ArcSearchResultSubNodesProps = {
  subNodesCount: number,
  subNodes: ArcSearchResultsNode[],
  subject: string,
  tagCache: string [],
  navLocation: string
}

export type ArcResultShowMoreSubNodesProps = {
  subNodeProps: ArcSearchResultSubNodesProps,
  showSubNodes: boolean,
  setShowSubNodes: CallableFunction
}

export type ArcSearchMainBodyProps = {
  hasVariousResults: boolean,
  hasSomeResults: boolean,
  subject: string,
  mainNode: ArcSearchResultsNode,
  mainNodeTags: string[],
  subNodesCount: number,
  subNodes: ArcSearchResultsNode[],
  tagCache: string [],
  navLocation: string
}

export type ArcSearchPageHeaderProps = {
  numOfResults: number,
  numOfTags: number,
  subject: string,
  type: ArcSearchHeaderType
}

export type ArcadiaSearchHomeProps = {
  navigate: string
}

export type ArcadiaGraphCoherenceProps = {
  numberOfSubjects: number,
  numberOfUrlRecords: number
}

export type ArcRandomRecordProps = {
  record: ArcResultPackage,
  navigate: string
}

export type ArcadiaTagIndexProps = {
  searchTerm: string,
  navigate: string
}

export type TagIndexProps = {
  arcadiaTags: [string, string[]][],
  navigate: string
}
