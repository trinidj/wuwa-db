/**
 * Centralized constants for the application
 */

export const ATTRIBUTES = [
  { value: "aero", label: "Aero", icon: "/assets/attributes/aero.png" },
  { value: "electro", label: "Electro", icon: "/assets/attributes/electro.png" },
  { value: "fusion", label: "Fusion", icon: "/assets/attributes/fusion.png" },
  { value: "glacio", label: "Glacio", icon: "/assets/attributes/glacio.png" },
  { value: "havoc", label: "Havoc", icon: "/assets/attributes/havoc.png" },
  { value: "spectro", label: "Spectro", icon: "/assets/attributes/spectro.png" }
] as const

export const WEAPON_TYPES = [
  { value: "broadblade", label: "Broadblade", icon: "/assets/weapons/Broadblade_Icon.png" },
  { value: "pistol", label: "Pistol", icon: "/assets/weapons/Pistols_Icon.png" },
  { value: "rectifier", label: "Rectifier", icon: "/assets/weapons/Rectifier_Icon.png" },
  { value: "gauntlet", label: "Gauntlet", icon: "/assets/weapons/Gauntlets_Icon.png" },
  { value: "sword", label: "Sword", icon: "/assets/weapons/Sword_Icon.png" }
] as const

export const RARITIES = [
  { value: "5", label: "5★" },
  { value: "4", label: "4★" }
] as const
