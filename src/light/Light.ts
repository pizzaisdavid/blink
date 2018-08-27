
export interface Light {
  flip(): Promise<void>;
  on(): Promise<void>;
  off(): Promise<void>;
  update(value: boolean): Promise<void>;
}
