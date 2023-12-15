type PresetType = 'Car' | 'vscode' | 'javascript'
type FromType = 'Santa' | 'Trash' | 'Dan'
type ToType = 'Trash' | 'Prime' | 'Evan'

export type GiftWrapper<Preset extends PresetType, From extends FromType, To extends ToType> = {
  present: Preset
  from: From
  to: To
}
