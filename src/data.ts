import { Axis } from './types';
import { axis1, axis2 } from './data/axes1-2';
import { axis3, axis4, axis5 } from './data/axes3-5';
import { axis6, axis7, axis8 } from './data/axes6-8';
import { axis9, axis10 } from './data/axes9-10';

export type { Axis, Theme, Resource, SubAxis } from './types';
export { subjectsList, subjectsData } from './types';
export { relatedSubjectsMap } from './data/relatedSubjects';

export const axes: Axis[] = [
  axis1,
  axis2,
  axis3,
  axis4,
  axis5,
  axis6,
  axis7,
  axis8,
  axis9,
  axis10
];
