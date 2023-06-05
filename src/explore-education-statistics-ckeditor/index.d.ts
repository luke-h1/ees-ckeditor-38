import { AlignmentConfig } from '@ckeditor/ckeditor5-alignment';
import { HeadingOption } from '@ckeditor/ckeditor5-heading';
import {
  LinkDecoratorManualDefinition,
  LinkDecoratorAutomaticDefinition,
} from '@ckeditor/ckeditor5-link/src/linkconfig';
import { Dictionary } from '@common/types';
import { AutosaveConfig } from '@ckeditor/ckeditor5-autosave';
import type { EditorConfig as CKEditorConfig } from '@ckeditor/ckeditor5-core';
import { Editor } from '@ckeditor/ckeditor5-core';
import { EventInfo } from '@ckeditor/ckeditor5-utils';
import { WatchdogConfig } from '@ckeditor/ckeditor5-watchdog/src/watchdog';

export { ResizeOption } from '@ckeditor/ckeditor5-image';
export { HeadingOption } from '@ckeditor/ckeditor5-heading';
export { AlignmentConfig } from '@ckeditor/ckeditor5-alignment';
declare module 'explore-education-statistics-ckeditor' {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  export const Editor: Editor;
}

export {
  Element,
  DowncastWriter,
  ViewRootEditableElement,
  Marker,
} from '@ckeditor/ckeditor5-engine';
export { Plugin, Editor } from '@ckeditor/ckeditor5-core';

export type CommentUndoRedoActions =
  | 'undoRemoveComment'
  | 'undoAddComment'
  | 'redoAddComment'
  | 'undoResolveComment'
  | 'redoUnresolveComment'
  | 'undoUnresolveComment'
  | 'redoResolveComment'
  | 'redoRemoveComment';

export interface CommentsPluginConfig {
  addComment: () => void;
  commentCancelled: () => void;
  commentRemoved: (markerId: string) => void;
  commentSelected: (markerId?: string) => void;
  undoRedoComment: (type: CommentUndoRedoActions, markerId: string) => void;
}

export interface CommentsPlugin extends Plugin {
  addCommentMarker(id: string): void;
  removeCommentMarker(id: string): void;
  resolveCommentMarker(id: string, resolved: boolean): void;
  selectCommentMarker(id: string): void;
}

interface ResizeOption {
  name: string;
  value: string | null;
  label: string;
  icon?: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface EditorConfig extends CKEditorConfig {
  comments?: CommentsPluginConfig;
}

// export interface EditorConfig {
//   toolbar?: string[];
//   extraPlugins?: string[];
//   image?: {
//     toolbar: string[];
//     resizeOptions: ResizeOption[];
//   };
//   table?: {
//     contentToolbar?: string[];
//   };
//   heading?: {
//     options: HeadingOption[];
//   };
//   link?: {
//     decorators: Dictionary<
//       LinkDecoratorAutomaticDefinition | LinkDecoratorManualDefinition
//     >;
//   };
//   comments?: CommentsPluginConfig;
//   autosave?: AutosaveConfig;
//   alignment?: AlignmentConfig;
// }

/*
  Typings for ckeditor-react `Props` interface because the package doesn't expose it 
  see https://github.com/ckeditor/ckeditor5-react/issues/381
*/

// eslint-disable-next-line @typescript-eslint/no-empty-interface
// export interface CKEditorProps {}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
/*
export const nominalTypeHack: unique symbol;
export type IsOptional<T> = undefined extends T ? true : false;
export type InferPropsInner<V> = { [K in keyof V]-?: InferType<V[K]>; };

export interface Validator<T> {
  (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    props: { [key: string]: any },
    propName: string,
    componentName: string,
    location: string,
    propFullName: string,
  ): Error | null;
  [nominalTypeHack]?:
    | {
        type: T;
      }
    | undefined;
}

export type RequiredKeys<V> = {
  [K in keyof V]-?: Exclude<V[K], undefined> extends Validator<infer T>
    ? IsOptional<T> extends true
      ? never
      : K
    : never;
}[keyof V];
export type OptionalKeys<V> = Exclude<keyof V, RequiredKeys<V>>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type InferType<V> = V extends Validator<infer T> ? T : any;

export type InferProps<V> = InferPropsInner<Pick<V, RequiredKeys<V>>> &
  Partial<InferPropsInner<Pick<V, OptionalKeys<V>>>>;

export interface CKEditorProps<TEditor extends Editor>
  extends InferProps<typeof CKEditor.propTypes> {
  editor: {
    create(...args: any): Promise<TEditor>;
  };
  config?: EditorConfig;
  watchdogConfig?: WatchdogConfig;
  onReady?: (editor: TEditor) => void;
  onError?: (error: Error, details: ErrorDetails) => void;
  onChange?: (event: EventInfo, editor: TEditor) => void;
  onFocus?: (event: EventInfo, editor: TEditor) => void;
  onBlur?: (event: EventInfo, editor: TEditor) => void;
}

interface Props<TEditor extends Editor> extends InferProps<typeof CKEditor.propTypes> {
    editor: {
        create(...args: any): Promise<TEditor>;
    };
    config?: EditorConfig;
    watchdogConfig?: WatchdogConfig;
    onReady?: (editor: TEditor) => void;
    onError?: (error: Error, details: ErrorDetails) => void;
    onChange?: (event: EventInfo, editor: TEditor) => void;
    onFocus?: (event: EventInfo, editor: TEditor) => void;
    onBlur?: (event: EventInfo, editor: TEditor) => void;
}
interface ErrorDetails {
    phase: 'initialization' | 'runtime';
    willEditorRestart?: boolean;
}
*/
