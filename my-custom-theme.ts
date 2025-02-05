
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #16c464 
		"--color-primary-50": "220 246 232", // #dcf6e8
		"--color-primary-100": "208 243 224", // #d0f3e0
		"--color-primary-200": "197 240 216", // #c5f0d8
		"--color-primary-300": "162 231 193", // #a2e7c1
		"--color-primary-400": "92 214 147", // #5cd693
		"--color-primary-500": "22 196 100", // #16c464
		"--color-primary-600": "20 176 90", // #14b05a
		"--color-primary-700": "17 147 75", // #11934b
		"--color-primary-800": "13 118 60", // #0d763c
		"--color-primary-900": "11 96 49", // #0b6031
		// secondary | #6538eb 
		"--color-secondary-50": "232 225 252", // #e8e1fc
		"--color-secondary-100": "224 215 251", // #e0d7fb
		"--color-secondary-200": "217 205 250", // #d9cdfa
		"--color-secondary-300": "193 175 247", // #c1aff7
		"--color-secondary-400": "147 116 241", // #9374f1
		"--color-secondary-500": "101 56 235", // #6538eb
		"--color-secondary-600": "91 50 212", // #5b32d4
		"--color-secondary-700": "76 42 176", // #4c2ab0
		"--color-secondary-800": "61 34 141", // #3d228d
		"--color-secondary-900": "49 27 115", // #311b73
		// tertiary | #388eeb 
		"--color-tertiary-50": "225 238 252", // #e1eefc
		"--color-tertiary-100": "215 232 251", // #d7e8fb
		"--color-tertiary-200": "205 227 250", // #cde3fa
		"--color-tertiary-300": "175 210 247", // #afd2f7
		"--color-tertiary-400": "116 176 241", // #74b0f1
		"--color-tertiary-500": "56 142 235", // #388eeb
		"--color-tertiary-600": "50 128 212", // #3280d4
		"--color-tertiary-700": "42 107 176", // #2a6bb0
		"--color-tertiary-800": "34 85 141", // #22558d
		"--color-tertiary-900": "27 70 115", // #1b4673
		// success | #84cc16 
		"--color-success-50": "237 247 220", // #edf7dc
		"--color-success-100": "230 245 208", // #e6f5d0
		"--color-success-200": "224 242 197", // #e0f2c5
		"--color-success-300": "206 235 162", // #ceeba2
		"--color-success-400": "169 219 92", // #a9db5c
		"--color-success-500": "132 204 22", // #84cc16
		"--color-success-600": "119 184 20", // #77b814
		"--color-success-700": "99 153 17", // #639911
		"--color-success-800": "79 122 13", // #4f7a0d
		"--color-success-900": "65 100 11", // #41640b
		// warning | #d6bb22 
		"--color-warning-50": "249 245 222", // #f9f5de
		"--color-warning-100": "247 241 211", // #f7f1d3
		"--color-warning-200": "245 238 200", // #f5eec8
		"--color-warning-300": "239 228 167", // #efe4a7
		"--color-warning-400": "226 207 100", // #e2cf64
		"--color-warning-500": "214 187 34", // #d6bb22
		"--color-warning-600": "193 168 31", // #c1a81f
		"--color-warning-700": "161 140 26", // #a18c1a
		"--color-warning-800": "128 112 20", // #807014
		"--color-warning-900": "105 92 17", // #695c11
		// error | #e85f5f 
		"--color-error-50": "252 231 231", // #fce7e7
		"--color-error-100": "250 223 223", // #fadfdf
		"--color-error-200": "249 215 215", // #f9d7d7
		"--color-error-300": "246 191 191", // #f6bfbf
		"--color-error-400": "239 143 143", // #ef8f8f
		"--color-error-500": "232 95 95", // #e85f5f
		"--color-error-600": "209 86 86", // #d15656
		"--color-error-700": "174 71 71", // #ae4747
		"--color-error-800": "139 57 57", // #8b3939
		"--color-error-900": "114 47 47", // #722f2f
		// surface | #444952 
		"--color-surface-50": "227 228 229", // #e3e4e5
		"--color-surface-100": "218 219 220", // #dadbdc
		"--color-surface-200": "208 210 212", // #d0d2d4
		"--color-surface-300": "180 182 186", // #b4b6ba
		"--color-surface-400": "124 128 134", // #7c8086
		"--color-surface-500": "68 73 82", // #444952
		"--color-surface-600": "61 66 74", // #3d424a
		"--color-surface-700": "51 55 62", // #33373e
		"--color-surface-800": "41 44 49", // #292c31
		"--color-surface-900": "33 36 40", // #212428
		
	}
}