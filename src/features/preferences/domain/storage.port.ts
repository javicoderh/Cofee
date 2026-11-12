export interface SelectionStorage { read(key: string): readonly string[]; write(key: string, ids: readonly string[]): { persisted: boolean }; readonly restricted: boolean }
